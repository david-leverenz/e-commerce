// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// This file defines the relationships for my models.  Products belongsTo Category.
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products.
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag).
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id',
  as: 'products_tag'
});

// Tags belongToMany Products (through ProductTag).
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id',
  as: 'tags_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
