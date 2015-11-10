"use strict";

var React = require('react');
var Router = require('react-router');
var LoginStore = require('../stores/loginStore');
var AppRouter = require('../appRouter.js');

/*
This object monitors current state and makes necessary transitions
*/

var StateMonitor = {

  init: function () {
      LoginStore.addChangeListener(this.onStateChange);
  },

 onStateChange: function(component) {
  var loginState = LoginStore.getCurrentState();

  switch (loginState) {
    case 0:
    case 1:
      AppRouter.transitionTo("app");
      break;
    case 2:
      AppRouter.transitionTo("step2");
      break;
    case 10:
      AppRouter.transitionTo("loginDone");
      break;
    default:
      AppRouter.transitionTo("app");
      break;
  }
}

};

module.exports = StateMonitor;
