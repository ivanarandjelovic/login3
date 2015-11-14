"use strict";

var StateMonitor = require('./components/stateMonitor');
var LoginActions = require('./actions/loginActions');
var AppRouter = require('./appRouter.js');

StateMonitor.init();
LoginActions.initialLoginAction();
