var express = require('express');
var app = express();
var cors = require('cors');
var compression = require('compression')

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use('/assets', express.static(__dirname + '/dist/assets'));


app.get('*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
