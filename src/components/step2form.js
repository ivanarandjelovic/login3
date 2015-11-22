"use strict";

var React = require('react');
var Input = require('./common/textInput');

var Step2Form = React.createClass({
	render: function() {
		return (
      <form>
			<Input
					name="tan"
					label="TAN"
					value={this.props.user.tan}
					onChange={this.props.onChange}
					error={this.props.errors.tan} />

				<input type="submit" value="Next" className="btn btn-default" onClick={this.props.onNext} />
			</form>
		);
	}
});

module.exports = Step2Form;
