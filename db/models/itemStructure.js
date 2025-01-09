const DataTypes = require('sequelize');
const sequelize = require('../connection.js');

const itemStructure = sequelize.define('Item', {
    itemID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    desc: { type: DataTypes.TEXT },
    price: { type:DataTypes.DOUBLE },
    link: { type: DataTypes.STRING },
    userID: { type:DataTypes.INTEGER, allowNull: false},
});


module.exports = itemStructure;