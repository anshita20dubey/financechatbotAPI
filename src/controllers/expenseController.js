const Expense = require('../models/Expense');

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.params.userId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addExpense = async (req, res) => {
    try {
        const { userId, date, category, amount } = req.body;

        // Validate input
        if (!userId || !date || !category || !amount) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new expense
        const newExpense = new Expense({
            userId,
            date,
            category,
            amount,
        });

        // Save the expense to the database
        const savedExpense = await newExpense.save();

        res.status(201).json(savedExpense);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add expense.', error: error.message });
    }
};

module.exports = { getExpenses, addExpense };
