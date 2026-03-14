const express = require('express');
const user = express.Router();
const { authenticator } = require('../../middlewares/authentication');
const { authorizeRoles } = require('../../middlewares/authorization');
const getUserController = require('./get-user.controller');
const updateUserController = require('./update-user.controller');

// user.post('/:id', registerController);
user.get('/user-profile', (req, res, next) =>
    authenticator(req, res, next),
    getUserController
);

user.patch('/update-user', (req, res, next) =>
    authenticator(req, res, next),
    authorizeRoles('superadmin'),
    updateUserController
);

module.exports = user;