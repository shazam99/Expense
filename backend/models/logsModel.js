// models/Log.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Logs = sequelize.define('Log', {
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

module.exports = Logs;
