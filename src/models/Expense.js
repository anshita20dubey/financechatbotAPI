const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
