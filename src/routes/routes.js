const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.get('/ping', (req, res) => {
	res.status(200).json({ message: 'Server is running!' });
});
router.get('/', itemController.getItems);
// router.post('/', itemController.createItem);

module.exports = router;