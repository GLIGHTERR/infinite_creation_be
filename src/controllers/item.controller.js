const Item = require('../models/item');

class ItemController {
  async getItems(req, res) {
    try {
      process.exit(1);

      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }

  // async createItem(req, res) {
  //   try {
  //     const { name } = req.body;

  //     const item = await Item.findOne().where('name').equals(name);

  //     if (item.)

  //     const newItem = new Item({
  //       name,
  //       icon,
        
  //     });

  //     await newItem.save();
  //     console.log('Item created:', newItem);

  //     res.status(201).json({ token });
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error' });
  //   }
  // }
}

module.exports = new ItemController();