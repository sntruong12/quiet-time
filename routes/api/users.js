const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/users/signup', usersCtrl.signup);
router.post('/users/login', usersCtrl.login)

module.exports = router;