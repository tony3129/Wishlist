const DataTypes = require('sequelize');
const sequelize = require('../connection.js');

const userStructure = sequelize.define('User', {
    userID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userName: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type:DataTypes.STRING, allowNull: false },
});


module.exports = userStructure;