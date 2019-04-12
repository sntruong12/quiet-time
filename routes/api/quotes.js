const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/api/quotes');

// quotes routes
router.get('/:id/quotes', quotesCtrl.index);
router.post('/:id/quotes', quotesCtrl.create);

module.exports = router;