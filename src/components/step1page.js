"use strict";

var React = require('react');
var Router = require('react-router');
var Step1Form = require('./step1form');
var LoginActions = require('../actions/loginActions');
var Link = Router.Link;

function prepareLoginForm(user) {
	return {
		username: user.username,
		"password:SX:": user.password
	};
}

var Step1Page = React.createClass({

	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			user: {
				username: null,
				password: null
			},
			errors: {
				username: null,
				password: null
			},
			dirty: false
		};
	},

	setUserState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.user[field] = value;
		return this.setState({user: this.state.user});
	},

	proceedWithLogin: function(event) {

			event.preventDefault();

//			if (!this.authorFormIsValid()) {
//				return;
//			}

		LoginActions.loginStep(prepareLoginForm(this.state.user));

		this.setState({dirty: false});
	},

	render: function() {
		return (
			<div className="jumbotron">
				<Step1Form
					user={this.state.user}
					errors={this.state.errors}
					onChange={this.setUserState}
					onNext={this.proceedWithLogin}/>
			</div>
		);
	}
});

module.exports = Step1Page;
