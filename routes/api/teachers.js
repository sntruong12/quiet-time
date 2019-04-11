const express = require('express');
const router = express.Router();
const teachersCtrl = require('../../controllers/api/teachers');

router.get('/teachers', teachersCtrl.index);
router.post('/teachers', teachersCtrl.create);

module.exports = router;