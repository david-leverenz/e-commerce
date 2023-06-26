const sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

const categorySeedData = require('./category-seeds.js');
const productSeedData = require('./product-seeds.js');
const productTagSeedData = require('./product-tag-seeds.js');
const tagSeedData = require('./tag-seeds.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categorySeedData);

  const products = await Product.bulkCreate(productSeedData);

  const productTags = await ProductTag.bulkCreate(productTagSeedData);

  const tags = await Tag.bulkCreate(tagSeedData);

  // for (const product of productSeedData) {
  //   const newProduct = await Product.create({
  //     category_id: id,
  //   });
  // }
  
  // for (const productTag of productTagSeedData) {
  //   const newproductTag = await ProductTag.create({
  //     product_id: id, tag_id: id,
  //   });
  // }

  // for (const tag of tagSeedData) {
  //   const newproductTag = await Tag.create({
  //     product_id: id, tag_id: id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
