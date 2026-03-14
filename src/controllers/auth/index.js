const express = require('express');
const auth = express.Router();
const registerController = require('./register.controller');
const loginController = require('./login.controller');

auth.post('/register', registerController);
auth.post('/login', loginController);

module.exports = auth;