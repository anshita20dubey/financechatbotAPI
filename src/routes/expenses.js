
const express = require('express');
const { getExpenses, addExpense } = require('../controllers/expenseController.js');
const router = express.Router();

router.get('/:userId', getExpenses);
router.post('/', addExpense);

module.exports = router;
