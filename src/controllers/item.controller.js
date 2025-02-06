const Item = require('../models/item');

class ItemController {
  async getItems(req, res) {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  async createItem(req, res) {
    try {
      const { name, icon, discoveredBy } = req.body;

      const item = await Item.findOne().where('name').equals(name);

      if (item !== null) {
        const newItem = new Item({
          name
        });

        await newItem.save();

        console.log('Item created:', newItem);

        res.json(newItem);
      } else {
        res.json(item);
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
}

module.exports = new ItemController();