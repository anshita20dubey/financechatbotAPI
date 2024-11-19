const express = require('express');
const { registerUser, setSavingGoal } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/saving-goal', setSavingGoal);

module.exports = router;
