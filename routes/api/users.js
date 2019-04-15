const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/users/signup', usersCtrl.signup);
router.post('/users/login', usersCtrl.login)
router.put('/users/:email/addlevel', usersCtrl.addlevel)

module.exports = router;