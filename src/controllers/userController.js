const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const setSavingGoal = async (req, res) => {
    try {
        const { userId, savingGoal, duration } = req.body;

        // Validate input
        if (!userId || !savingGoal || !duration) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Find user and update saving goal
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.savingGoal = savingGoal;
        user.duration = duration;
        const updatedUser = await user.save();

        res.status(200).json({ message: 'Saving goal updated successfully.', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to set saving goal.', error: error.message });
    }
};


module.exports = { registerUser, setSavingGoal };
