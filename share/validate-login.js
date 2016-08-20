"use strict";
let _ = require('lodash');
function validateLogin(user) {
  return !(_.hasOwnProperty('username') || _.hasOwnProperty('password') || _.isEmpty(user.username) || _.isEmpty(user.password))
}

module.exports = validateLogin;
