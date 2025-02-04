const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    icon: { type: String, required: true, default: 'abc' },
    description: { type: String },
    isBasic: { type: Boolean, required: true, default: false },
    discoveredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // Người chơi khám phá ra (nếu có)
}, { 
	timestamps: true,
	versionKey: false 
});

module.exports = mongoose.model('Item', ItemSchema);