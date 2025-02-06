// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const seedDatabase = require('./scripts/seed');

// Kết nối cơ sở dữ liệu
connectDB();
seedDatabase();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

// Routes
app.use('/api/items', require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});