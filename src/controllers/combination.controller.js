const User = require('../models/user');
const Item = require('../models/item');
const Combination = require('../models/combination');
const mongoose = require('mongoose');

class CombinationController {
	async combineItems(req, res) {
		const receipes = {
			'Water+Water': 'Lake',
	    'Water+Fire': 'Steam',
	    'Water+Wind': 'Rain',
	    'Water+Earth': 'Mud',
	    'Fire+Fire': 'Volcano',
	    'Fire+Wind': 'Smoke',
	    'Fire+Earth': 'Lava',
	    'Wind+Wind': 'Tornado',
	    'Wind+Earth': 'Dust',
	    'Earth+Earth': 'Mountain',
		};

		try {
			const userId = req.user.id;
			const { item_1, item_2 } = req.body;

			if (item_1 === '' || item_2 === '') {
				return res.status(500).json({ 
					success: false,
					error_code: 1,
					message: 'Item(s) Missing',
					data: null 
				});
			}

			const user = await User
				.findOne({ _id: userId })
				.select('discoveredItems');

			const getItems = await Item.find({
						name: { $in: [item_1, item_2] }
					}).select('_id');

			const result1 = item_1.concat('+', item_2);
			const result2 = item_2.concat('+', item_1);
			const finalResult = receipes[result1] ?? receipes[result2];

			if (finalResult !== null) {
				const item = await Item.findOne()
					.where('name').equals(finalResult);

				if (item === null) { // Item has not been existed
					// Create new item
					const newItem = await Item.create({
						name: finalResult,
						icon: finalResult,
						discoveredBy: new mongoose.Types.ObjectId(userId)
					});

					// Create new combination
					if (item_1 === item_2) {
						const newCombination = await Combination.create({
							item_1: new mongoose.Types.ObjectId(getItems[0]._id),
							item_2: new mongoose.Types.ObjectId(getItems[0]._id),
							result: new mongoose.Types.ObjectId(newItem._id)
						});
					} else {
						const newCombination = await Combination.create({
							item_1: new mongoose.Types.ObjectId(getItems[0]._id),
							item_2: new mongoose.Types.ObjectId(getItems[1]._id),
							result: new mongoose.Types.ObjectId(newItem._id)
						});
					}

					// Update to user list discovered items
					const updateUser = await User.findByIdAndUpdate(
						userId,
						{ $push: { discoveredItems: new mongoose.Types.ObjectId(newItem._id) } },
						{ new: true }, // Get the new update data immediately
					);

					return res.status(200).json({
						success: true,
						message: 'Combine complete',
						data: newItem
					});
				}

				// Item has been existed
				// Check whether the user has discovered this item
				if (!user.discoveredItems.includes(item._id)) {
					// Update to user list discovered items
					const updateUser = await User.findByIdAndUpdate(
						userId,
						{ $push: { discoveredItems: new mongoose.Types.ObjectId(newItem._id) } },
						{ new: true }, // Get the new update data immediately
					);
				}

				return res.status(200).json({
					success: true,
					message: 'Combine complete',
					data: item
				});
			}

			// If this is a new combination that has not been listed in receipes
			// Call AI to create new item and combination
			// to do
	    } catch (error) {
	    	// res.status(500).json({ message: error });
	      return res.status(500).json({ message: 'Server error' });
	    }
	}
}

module.exports = new CombinationController();