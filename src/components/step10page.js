"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var Link = Router.Link;

var Step10Page = React.createClass({

  mixins: [
		Router.Navigation
	],

	proceedWithLogin: function(event) {
		event.preventDefault();

    // TODO: Change this to start app for real
    toastr.success('Here it goes, login redirect to: ' + 'TODO');
	},

  cancelLogin: function(event) {
		event.preventDefault();

    // TODO: Change this to start app for real
    this.transitionTo('app');
	},

	render: function() {
		return (
			<div className="jumbotron">
        <form>
          <h1>Login Done</h1>
          <input type="submit" value="Start" className="btn btn-default" onClick={this.proceedWithLogin} />
          <input type="submit" value="Cancel" className="btn" onClick={this.cancelLogin} />
        </form>
			</div>
		);
	}
});

module.exports = Step10Page;
