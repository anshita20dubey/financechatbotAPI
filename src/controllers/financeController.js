const Expense = require('../models/Expense');
const User = require('../models/User');
const { getSavingsAdvice } = require('../services/geminiService');

const getFinancialAdvice = async (req, res) => {
    try {
        const { userId } = req.body;

        // Fetch user details
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Fetch user's expenses
        const expenses = await Expense.find({ userId });

        // Aggregate monthly expense data
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const avgDailyExpense = totalExpenses / 30; // Assuming a 30-day month

        // Use Gemini API for advice
        const advice = await getSavingsAdvice(user.savingGoal, user.duration, avgDailyExpense);

        res.json({ advice });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching financial advice', error: error.message });
    }
};

module.exports = { getFinancialAdvice };
