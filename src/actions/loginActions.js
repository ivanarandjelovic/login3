"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var LoginActions = {
	loginStep: function(loginForm) {
		// TODO: post login form here, retrieve response data and then dispatch it

		var loginResponseData = {
			s: 2
		};

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.LOGIN_STEP,
			data: loginResponseData
		});
	}

};

module.exports = LoginActions;
