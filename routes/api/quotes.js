const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/api/quotes');

router.post('/:t_name/quotes', quotesCtrl.create);

// Protected Routes
router.use(require('../../config/auth'));
router.get('/:t_name/quotes', quotesCtrl.index);

module.exports = router;