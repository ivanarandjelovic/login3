"use strict";

var React = require('react');
var Router = require('react-router');
var Step2Form = require('./step2form');
var Link = Router.Link;

var Step2Page = React.createClass({

  mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			user: {
				tan: null
			},
			errors: {
				tan: null
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
		// TODO: Validate

		//Attempt Login, step 2


		this.setState({dirty: false});

    this.transitionTo('loginDone');
	},

	render: function() {
		return (
			<div className="jumbotron">
				<Step2Form
					user={this.state.user}
					errors={this.state.errors}
					onChange={this.setUserState}
					onNext={this.proceedWithLogin}/>
			</div>
		);
	}
});

module.exports = Step2Page;