import express from 'express';
import path from 'path';
import React from 'react';
import createMemoryHistory from 'history/lib/createMemoryHistory'
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import createRoutes from '../../src/routes/index';
import configureStore from '../../src/stores/configureStore';


export default function() {
  let app = express();
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');

  app.get('*', (request, response) => {
    let history = createMemoryHistory();
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
          openGraph: request.openGraph,
          FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID
        });
      } else {
        response.status(404).send('Not found');
      }
    });
  });

  return app;
}
