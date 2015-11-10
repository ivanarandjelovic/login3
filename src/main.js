"use strict";

var InitializeActions = require('./actions/initializeActions');
var StateMonitor = require('./components/stateMonitor');
var AppRouter = require('./appRouter.js');

InitializeActions.initApp();
StateMonitor.init();
