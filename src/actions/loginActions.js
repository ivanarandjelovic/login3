"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var LoginApi = require('../api/loginApi');
var LoginStore = require('../stores/loginStore');

var LoginActions = {


	loginStep: function(loginForm) {
		// TODO: post login form here, retrieve response data and then dispatch it

    //Mockup: simply post data with current state
		var loginResponseData = LoginApi.postLoginStep({state: LoginStore.getCurrentState()});

		console.log("login data received: " + JSON.stringify(loginResponseData));

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.LOGIN_STEP,
			data: loginResponseData
		});
	},


	initialLoginAction: function() {
		// Initially we simply submit first request to get the states moving
		return this.loginStep({});
	}

};

module.exports = LoginActions;
