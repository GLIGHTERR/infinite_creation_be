const mongoose = require('mongoose');

const CombinationSchema = new mongoose.Schema({
    element1: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    element2: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    result: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }
}, { 
	timestamps: true,
	versionKey: false 
});

module.exports = mongoose.model('Combination', CombinationSchema);