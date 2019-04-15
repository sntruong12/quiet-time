const express = require('express');
const router = express.Router();
const teachersCtrl = require('../../controllers/api/teachers');

router.get('/teachers', teachersCtrl.index);
router.get('/teachers/:t_name', teachersCtrl.show);
router.post('/teachers', teachersCtrl.create);
router.delete('/teachers/:t_name', teachersCtrl.delete);

module.exports = router;