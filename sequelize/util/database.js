const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'iamchevon21', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;