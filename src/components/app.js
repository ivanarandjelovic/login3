/*eslint-disable strict */
//Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var Footer = require('./common/footer');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        {/* <Header/> */}
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  <RouteHandler/>
                </div>
                <div className="panel-footer"><Footer/></div>
              </div>
            </div>
          {/* <Footer/> */}
        </div>
      </div>
    );
  }
});

module.exports = App;
