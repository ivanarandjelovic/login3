"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');
var StateMonitor = require('./components/stateMonitor');

InitializeActions.initApp();
//StateMonitor.init();

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
