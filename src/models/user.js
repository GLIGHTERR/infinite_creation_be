const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    discoveredElements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] // Các yếu tố đã khám phá
}, { 
	timestamps: true,
	versionKey: false 
});

module.exports = mongoose.model('User', UserSchema);