"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var LoginApi = require('../api/loginApi');
var LoginStore = require('../stores/loginStore');
var _ = require('lodash');

var LoginActions = {

  /*
	This helper function will dispatch event synchronously if possible,
	but if we are in the middle of other dispatch then we delay it until next tick
	(can't dispatch in the middle of dispatch).
		*/
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

    //Mockup: simply post data with current state (adding state here is needed for mockup only!!!)
		var loginResponseData = LoginApi.postLoginStep(_.merge({state: LoginStore.getCurrentState()}, loginForm));

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
