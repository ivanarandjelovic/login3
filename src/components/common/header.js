"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
        <div class="container">
          <div className="navbar navbar-default">
            <div className="container-fluid">
                Header
            </div>
          </div>
          <div class="page-header"><h1>IMg here</h1></div>
        </div>
    );
  }
});

module.exports = Header;
