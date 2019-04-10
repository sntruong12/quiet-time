const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/users', usersCtrl.create);

module.exports = router;