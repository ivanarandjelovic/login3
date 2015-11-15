"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <Route name="step2" handler={require('./components/step2page')} />
      <Route name="step10" handler={require('./components/step10page')} />
    <DefaultRoute handler={require('./components/step1page')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
  </Route>
);

module.exports = routes;
