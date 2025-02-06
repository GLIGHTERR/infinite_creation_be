const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const combinationController = require('../controllers/combination.controller');

router.post('/combine', combinationController.combineItems);
router.get('/', itemController.getItems);
router.post('/', itemController.createItem);

module.exports = router;