const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	deviceId: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  discoveredItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] // Các yếu tố đã khám phá
}, { 
	timestamps: true,
	versionKey: false 
});

UserSchema.index({ deviceId: 1 });

module.exports = mongoose.model('User', UserSchema);