'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tea-sequelize', { logging: false });

module.exports = db;
