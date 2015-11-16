"use strict";

//This file is mocking a web API by hitting hard coded data.
var loginStepsData = require('./loginStepsData');
var _ = require('lodash');


var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var LoginApi = {
  postLoginStep: function(postData) {
    console.log("postLoginStep called with :" + JSON.stringify(postData));
    if (postData.cancel !== undefined) {
      return _clone(loginStepsData.step1);
    } else {
      switch (postData.state) {
        case 0:
          return _clone(loginStepsData.step1);
        case 1:
          return _clone(loginStepsData.step2);
        case 2:
          return _clone(loginStepsData.step31);
        case 31:
          return _clone(loginStepsData.step33);
        case 33:
          return _clone(loginStepsData.step10);
        case 10:
          return _clone(loginStepsData.startLink);
        default:
          return _clone(loginStepsData.step0);
      }
    }
  }

};

module.exports = LoginApi;
