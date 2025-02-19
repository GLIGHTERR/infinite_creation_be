const Item = require('../models/item');
const Combination = require('../models/combination');
const mongoose = require('mongoose');
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
    name: 'Wind', 
    icon: 'air',
    description: 'Basic element: Wind', 
    isBasic: true 
  }
];

const seedDatabase = async () => {
  try {
    const checkItemExisted = await Item.findOne();

    if (checkItemExisted === null) {
      // Thêm phần tử cơ bản
      await Item.insertMany(basicItems);
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

module.exports = seedDatabase;