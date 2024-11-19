const express = require('express');
const { getFinancialAdvice } = require('../controllers/financeController');
const router = express.Router();

router.post('/advice', getFinancialAdvice);

module.exports = router;
