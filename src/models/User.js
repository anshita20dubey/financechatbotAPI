const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // Add bcrypt for hashing
    savingGoal: { type: Number, default: 0 },
    duration: { type: Number, default: 1 }, // In months
});

module.exports = mongoose.model('User', UserSchema);
