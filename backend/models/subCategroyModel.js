const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { v4: uuidv4 } = require("uuid");
const User = require("./userModel");
const categorySchema = require("./categoryModel");

const subCategorySchema = sequelize.define("master_category_sub", {
    sub_id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        allowNull: false,
        primaryKey: true,
    },
    sub_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: categorySchema,
            key: 'category_id'
        }
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

subCategorySchema.sync({ alter: true });

categorySchema.hasMany(subCategorySchema, { foreignKey: 'category_id' });
subCategorySchema.belongsTo(categorySchema, {
    foreignKey: 'category_id', // This should match the column name in SubCategory that references Category
    onDelete: 'CASCADE', // Optional: specifies the behavior when a category is deleted
});


module.exports = subCategorySchema;
