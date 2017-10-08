'use strict';

const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost/teas', { logging: false });

const Tea = db.define('tea', {
  title: {
    type: Sequelize.STRING,
  },
  description: Sequelize.TEXT,
  price: Sequelize.INTEGER,
  category: Sequelize.ENUM('green', 'black', 'herbal')
}, {
    getterMethods: {
      dollarPrice() {
        return `$${(this.getDataValue('price') / 100).toFixed(2)}`;
      }
    }
  });

Tea.findByCategory = (category) => { // arrow is fine because it's a class method
  return Tea.findAll({
    where: {
      category: category
    }
  });
};

/* notes to self:
  - don't use arrow functions with instance methods,
  - $overlap ≠ 'instances that have the same x as this one'; error: 'operator does not exist: ___ && unknown'
  - not sure why "Op is not defined"??
  - if array includes instance, then use the $ne operator
*/

Tea.prototype.findSimilar = function () {
  return Tea.findAll({
    where: {
      category: this.category,
      title: {
        $ne: this.title
      }
    }
  });
};

// note to self: personally, this is the easiest way to add hooks

Tea.addHook('beforeCreate', instance => {
  instance.title = instance.title.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
  return instance.title;
});

module.exports = { db, Tea };
