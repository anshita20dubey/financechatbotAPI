const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./src/routes/users');
const expenseRoutes = require('./src/routes/expenses');
const financeRoutes = require('./src/routes/finance');
require('dotenv').config();

const app = express();
app.use(express.json());


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);
app.use('/finance', financeRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
