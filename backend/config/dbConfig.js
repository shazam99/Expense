const { Sequelize } = require("sequelize");

const dbData = process.env;
const sequelize = new Sequelize({
    dialect:  dbData.DB_DIALECT,
    username: dbData.DB_USERNAME,
    password: dbData.DB_PASSWORD,
    database: dbData.DB_DATABASE,
    host:     dbData.DB_HOST,
    port:     dbData.DB_PORT,
    logging:  false
});

module.exports = sequelize;