// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const seedDatabase = require('./scripts/seed');
const authRoute = require('./routes/auth_route');
const gameRoute = require('./routes/game_route');
const authenticateToken = require('./middleware/auth');
const getIPv4Address = require('./utils/util');

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
app.use('/auth', authRoute);

// Middleware
app.use('/api', authenticateToken);
app.use('/api/items', gameRoute);

// Server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
});

app.listen(PORT, getIPv4Address(), () => {
  console.log(`Server running on port ${PORT}`);
});