"use strict";

var React = require('react');
var Input = require('./common/textInput');

var Step1Form = React.createClass({
	render: function() {
		return (
      <form>
				<Input
					name="username"
					label="Username"
					value={this.props.user.username}
					onChange={this.props.onChange}
					error={this.props.errors.username} />

				<Input
					name="password"
					label="Password"
					value={this.props.user.password}
					onChange={this.props.onChange}
					error={this.props.errors.password} />

				<input type="submit" value="Next" className="btn btn-default" onClick={this.props.onNext} />
			</form>
		);
	}
});

module.exports = Step1Form;
