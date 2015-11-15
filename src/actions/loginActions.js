"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var LoginApi = require('../api/loginApi');
var LoginStore = require('../stores/loginStore');

var LoginActions = {

	dispatchHelper: function(eventData) {
		if(Dispatcher.isDispatching()) {
			window.setTimeout(function () {
				Dispatcher.dispatch(eventData);
			});
		} else {
			Dispatcher.dispatch(eventData);
		}
	},

	loginStep: function(loginForm) {
		// TODO: post login form here, retrieve response data and then dispatch it

    //Mockup: simply post data with current state
		var loginResponseData = LoginApi.postLoginStep({state: LoginStore.getCurrentState()});

		console.log("login data received: " + JSON.stringify(loginResponseData));

		//Dispatch event about new login data/state.
		this.dispatchHelper({
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
