import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import assets from './middlewares/assets';
import render from './middlewares/render';
import openGraph from './middlewares/openGraph';


/* express settings */
let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5002));

/* routes */
app.get('/robots.txt', (req, res) => {
  res.format({
    'text/plain': function () {
      res.status(200).render('robots')
    }
  })
});

/* middlewares */
app.use(compression());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(openGraph());
app.use(assets());
app.use(render());

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
