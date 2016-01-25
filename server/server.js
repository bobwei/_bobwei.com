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
import createHistory from 'history/lib/createMemoryHistory';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import createRoutes from '../src/routes/index';
import configureStore from '../src/stores/configureStore';
import openGraph from './middlewares/openGraph';


let app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
let env = process.env.env || 'dev';
console.log('loading server for env: ' + env);

app.set('port', (process.env.PORT || 5002));

app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(openGraph());

if (env === 'dev') {
  new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.port, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }
    console.log('Webpack Dev Server Listening at localhost:' + config.port);
  });

  app.use(
    '/assets/cover-photo.jpg',
    express.static(__dirname + '/../src/images/cover-photo.jpg')
  );
  app.use('/assets', proxy(url.parse('http://localhost:8000/assets')));
} else {
  app.use('/assets', express.static(__dirname + '/../dist/assets'));
}


app.get('*', function(request, response) {
  let history = createHistory();
  let routes = createRoutes(history);
  let store = configureStore(undefined, history);
  match({
    routes,
    location: request.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let html = renderToStaticMarkup(
        <Provider store={store} >
          <RouterContext {...renderProps} />
        </Provider>
      );
      response.render('index', {
        html,
        openGraph: request.openGraph
      });
    } else {
      response.status(404).send('Not found');
    }
  })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
