"use strict";

var React = require('react');
var Router = require('react-router');
var LoginStore = require('../stores/loginStore');
var AppRouter = require('../appRouter.js');
var LoginActions = require('../actions/loginActions');

/*
This object monitors current state and makes necessary transitions
*/

var StateMonitor = {

  init: function () {
      LoginStore.addChangeListener(this.onStateChange);
  },

 onStateChange: function(component) {
  var loginState = LoginStore.getCurrentState();

  console.log("StateMonitor: onStateChange " + loginState);

  switch (loginState) {
    case 0:
      //Submit initial request with browser info
      LoginActions.loginStep({});
      break;
    case 1:
      AppRouter.transitionTo("app");
      break;
    case 2:
      AppRouter.transitionTo("step2");
      break;
    case 10:
      AppRouter.transitionTo("step10");
      break;
    case 31:
      // we move to next state automatically
      LoginActions.loginStep({});
      break;
    case 33:
      // we move to next state automatically
      LoginActions.loginStep({});
      break;
    default:
      AppRouter.transitionTo("app");
      break;
  }
}

};

module.exports = StateMonitor;
