'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

const Tea = db.define('tea', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.INTEGER,
  category: Sequelize.ENUM('green', 'black', 'herbal')
}, {
  // add more functionality to our Tea model here!
})

module.exports = Tea
