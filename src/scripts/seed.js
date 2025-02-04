const Item = require('../models/item');
require('dotenv').config();

const basicItems = [
  { 
    name: 'Water', 
    icon: 'water_drop',
    description: 'Basic element: Water', 
    isBasic: true 
  },
  { 
    name: 'Fire', 
    icon: 'local_fire_department',
    description: 'Basic element: Fire', 
    isBasic: true 
  },
  { 
    name: 'Earth', 
    icon: 'terrain',
    description: 'Basic element: Earth', 
    isBasic: true 
  },
  { 
    name: 'Air', 
    icon: 'air',
    description: 'Basic element: Air', 
    isBasic: true 
  }
];

const seedDatabase = async () => {
  try {
    const checkExisted = await Item.findOne();

    if (checkExisted === null) {
      // Xóa dữ liệu cũ
      await Item.deleteMany({ isBasic: true });
      
      // Thêm phần tử cơ bản
      await Item.insertMany(basicItems);
      
      console.log('Database seeded successfully');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

module.exports = seedDatabase;