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

    // const checkCombinationExisted = await Combination.findOne();

    // if (checkCombinationExisted === null) {
    //   const allItems = await Item.find().where('isBasic').equals(true);

    //   if (allItems.length > 0) {
    //     const basicCombination = [];
    //     const items = [];

    //     for (let item1 of allItems) {
    //       var item_id1 = mongoose.Types.ObjectId(item1._id);

    //       for (let item2 of allItems) {
    //         var item_id2 = mongoose.Types.ObjectId(item2._id);
    //         var result = '';

    //         if (item1.name === 'Water' || item2.name === 'Water') {
    //           if (item1.name === 'Water' && item2.name === 'Water') {
    //             result = 'Lake';
    //           }

    //           if (item1.name === 'Fire' || item2.name === 'Fire') {
    //             result = 'Steam';
    //           }

    //           if (item1.name === 'Wind' || item2.name === 'Wind') {
    //             result = 'Rain';
    //           }

    //           if (item1.name === 'Earth' || item2.name === 'Earth') {
    //             result = 'Mud';
    //           }
    //         }

    //         if (item1.name === 'Fire' || item2.name == 'Fire') {
    //           if (item1.name === 'Fire' && item2.name === 'Fire') {
    //             result = 'Volcano';
    //           }

    //           if (item1.name === 'Wind' || item2.name === 'Wind') {
    //             result = 'Smoke';
    //           }

    //           if (item1.name === 'Earth' || item2.name === 'Earth') {
    //             result = 'Lava';
    //           }
    //         }

    //         if (item1.name === 'Wind' || item2.name == 'Wind') {
    //           if (item1.name === 'Wind' && item2.name === 'Wind') {
    //             result = 'Tornado';
    //           }

    //           if (item1.name === 'Earth' || item2.name === 'Earth') {
    //             result = 'Dust';
    //           }
    //         }

    //         if (item1.name === 'Earth' && item2.name == 'Earth') {
    //           result = 'Mountain';
    //         }

    //         if (!items.includes(result)) {
    //           items.push(result);

    //           basicCombination.push({
    //             item_1: item_id1,
    //             item_2: item_id2,
    //             result: result,
    //           });
    //         }
    //       }
    //     }

    //     // Thêm phần tử
    //     // await 
    //     await Combination.insertMany(basicCombination);
    //   }
    // }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

module.exports = seedDatabase;