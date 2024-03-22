const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const { v4: uuidv4 } = require("uuid");

const userSchema = sequelize.define("master_users", {
    user_id: {
        type: DataTypes.UUID, // Use UUID data type
        defaultValue: uuidv4, // Generate UUIDv4 by default
        allowNull: false,
        primaryKey: true, // Define user_id as primary key
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "ROLE_USER",
        allowNull: false,
        unique: false,
    }
}, {
    timestamps: true,
});

userSchema.sync({ alter: true });
module.exports = userSchema;



// expense_id: {
//     type: DataTypes.UUIDV4,
//         allowNull: false,
//             unique: true,
//     },
// user_id: {
//     type: DataTypes.STRING,
//         allowNull: false,
//             unique: false,
//     },
// category_id: {
//     type: DataTypes.STRING,
//         allowNull: false,
//             unique: false,
//     },
// sub_id: {
//     type: DataTypes.STRING,
//         allowNull: true,
//             unique: false,
//     },
// expense_name: {
//     type: DataTypes.STRING,
//         allowNull: false,
//             unique: false,
//     },
// expense_amount: {
//     type: DataTypes.DOUBLE,
//         allowNull: false,
//             unique: false,
//     },
// expense_time: {
//     type: DataTypes.DATE,
//         allowNull: false,
//             unique: false,
//     },