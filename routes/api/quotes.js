const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/api/quotes');

router.get('/:t_name/quotes', quotesCtrl.index);
router.post('/:t_name/quotes', quotesCtrl.create);

module.exports = router;