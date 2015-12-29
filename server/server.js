import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';
import proxy from 'proxy-middleware';
import url from 'url';

import React from 'react';
import createMemoryHistory from 'history/lib/createMemoryHistory'
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RoutingContext } from 'react-router'
import createRoutes from '../src/routes/index';


let app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
let env = process.env.env || 'dev';
console.log('loading server for env: ' + env);

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));

if (env === 'dev') {
  new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.port, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }
    console.log('Webpack Dev Server Listening at localhost:' + config.port);
  });

  app.use('/assets', proxy(url.parse('http://localhost:8000/assets')));
} else {
  app.use('/assets', express.static(__dirname + '/../dist/assets'));
}


app.get('*', function(request, response) {
  let history = createMemoryHistory();
  let routes = createRoutes(history);
  match({
    routes,
    location: request.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let html = renderToStaticMarkup(<RoutingContext {...renderProps} />);
      response.render('index', { html });
    } else {
      response.status(404).send('Not found');
    }
  })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
