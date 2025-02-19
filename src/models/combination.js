const mongoose = require('mongoose');

const CombinationSchema = new mongoose.Schema({
  item_1: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  item_2: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  result: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }
}, { 
	timestamps: true,
	versionKey: false 
});

CombinationSchema.index({ item_1: 1 });
CombinationSchema.index({ item_2: 1 });

module.exports = mongoose.model('Combination', CombinationSchema);