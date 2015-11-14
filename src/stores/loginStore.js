"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _loginData = {
  state: null
};

var LoginStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getLoginData: function() {
		return _loginData;
	},

  getCurrentState: function() {
    return _loginData.state;
  }

});

/* Take over values from the reponse and store them as current login data */
function updateLoginData(data) {
  console.log("updateLoginData : " + JSON.stringify(data));
  if(data.s !== undefined) {
    _loginData.state = data.s;
    console.log("LoginStore: _loginData.state becomes : " + (data.s));
  }
  // TODO: complete this for all possible values
}

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.LOGIN_STEP:
			updateLoginData(action.data);
			LoginStore.emitChange();
			break;
		default:
			// no op
	}
});


module.exports = LoginStore;
