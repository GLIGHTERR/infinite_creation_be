const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

class AuthController {
	async login(req, res) {
		try {
		    const { deviceId } = req.body;
		    
		    // Tìm user existing hoặc tạo mới
		    let user = await User.findOne({ 'deviceId': deviceId });
		    
		    if (!user) {
		        user = await User.create({
		            deviceId,
		            username: `guest${Math.random().toString(36).substr(2, 9)}`,
		        });
		    }
		    
		    // Tạo JWT token
		    const token = jwt.sign(
		        { id: user._id },
		        process.env.JWT_SECRET,
		        { expiresIn: '365d' } // Token hết hạn sau 1 năm
		    );
		    
		    res.json({ token, user });
		} catch (error) {
		    res.status(500).json({ message: error.message });
		}
	}
}

module.exports = new AuthController();