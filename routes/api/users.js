const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.get('/users', usersCtrl.index);
router.post('/users/signup', usersCtrl.signup);
router.post('/users/login', usersCtrl.login);
router.put('/users/:email/addlevel', usersCtrl.addlevel);
router.delete('/users/:email', usersCtrl.delete);

module.exports = router;