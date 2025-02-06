const Item = require('../models/item');
const Combination = require('../models/combination');

class CombinationController {
	async combineItems(req, res) {
		try {
				const { item_1, item_2 } = req.body;

	      // const items = await Item.find();

	      // const combineItems = [{
	      // 	item_1: items[0]._id,
	      // 	item_2: items[0]._id,
	      // 	result: 'Lake'
	      // }];

	      // await Combination.insertMany(combineItems);

	      res.status(200).json({ message: 'Combine complete' });
	    } catch (error) {
	    	res.status(500).json({ message: error });
	      // res.status(500).json({ message: 'Server error' });
	    }
	}
}

module.exports = new CombinationController();