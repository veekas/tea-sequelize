'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tea-sequelize');

module.exports = db;
