"use strict";

var React = require('react');
var Router = require('react-router');
var LoginActions = require('../actions/loginActions');
var LoginStore = require('../stores/loginStore');
var toastr = require('toastr');
var Link = Router.Link;

var Step10Page = React.createClass({

  mixins: [
		Router.Navigation
	],

	proceedWithLogin: function(event) {
		event.preventDefault();

    // Just submit empty request to get redirect location
    LoginActions.loginStep({});

    // TODO: Change this to start app for real
  //  toastr.success('Here it goes, login redirect to: ' + LoginStore.getLoginData().redirectLocation);

	},

  cancelLogin: function(event) {
		event.preventDefault();

    // Submit request with cancelation request
    LoginActions.loginStep({cancel: "true"});
	},

	render: function() {
		return (
        <form>
          <h3>Login Done</h3>
          <input type="submit" value="Start" className="btn btn-default" onClick={this.proceedWithLogin} />
          <input type="submit" value="Cancel" className="btn" onClick={this.cancelLogin} />
        </form>
		);
	}
});

module.exports = Step10Page;
