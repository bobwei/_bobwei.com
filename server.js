var express = require('express');
var app = express();
var cors = require('cors');
var compression = require('compression');

var env = process.env.env || 'dev';
console.log('loading server for env: ' + env);

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));

if (env === 'dev') {
  /*eslint no-console:0 */
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.port, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }
    console.log('Webpack Dev Server Listening at localhost:' + config.port);
  });

  var proxy = require('proxy-middleware');
  var url = require('url');

  app.use('/assets', proxy(url.parse('http://localhost:8000/assets')));
} else {
  app.use('/assets', express.static(__dirname + '/dist/assets'));
}


app.get('*', function(request, response) {
  var htmlPath = '/dist/index.html';
  if (env === 'dev') {
    htmlPath = '/src/index.html';
  }
  response.sendFile(__dirname + htmlPath);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
