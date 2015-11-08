"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
	render: function() {
		return (
        <footer className="footer">
          <div className="container">
              Footer
          </div>
        </footer>
		);
	}
});

module.exports = Footer;
