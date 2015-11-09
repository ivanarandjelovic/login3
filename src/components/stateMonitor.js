"use strict";

var React = require('react');
var Router = require('react-router');
var LoginStore = require('../stores/loginStore');

/*
This object monitors current state and makes necessary transitions
*/

var StateMonitor = {

//  init: function () {
//      LoginStore.addChangeListener(this._onChange);
//  },

_onStateChange: function(component) {
  var loginState = LoginStore.getCurrentState();

  switch (loginState) {
    case 0:
    case 1:
      component.transitionTo("step1");
      break;
    case 2:
      component.transitionTo("step2");
      break;
    case 10:
      component.transitionTo("loginDone");
      break;
    default:
      component.transitionTo("step1");
      break;
  }
}

};

module.exports = StateMonitor;
