import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';
import proxy from 'proxy-middleware';
import url from 'url';

let app = express();
let env = process.env.env || 'dev';
console.log('loading server for env: ' + env);

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));

if (env === 'dev') {
  /*eslint no-console:0 */
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
  let htmlPath = __dirname + '/../dist/index.html';
  if (env === 'dev') {
    htmlPath = __dirname + '/../src/index.html';
  }
  response.sendFile(path.resolve(htmlPath));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
