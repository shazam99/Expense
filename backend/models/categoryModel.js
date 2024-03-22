const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { v4: uuidv4 } = require("uuid");
const User = require("./userModel");

const categorySchema = sequelize.define("master_category_main", {
    category_id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
        primaryKey: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: User,
            key: 'user_id'
        }
    },
}, {
    timestamps: true,
});


// Synchronize the categorySchema with the database
categorySchema.sync({ alter: true });

module.exports = categorySchema;
