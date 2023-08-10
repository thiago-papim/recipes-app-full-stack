"use strict";
const config = {
    username: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '123456',
    database: process.env.MYSQLDATABASE || 'RECIPES_APP',
    host: process.env.MYSQLHOST || 'localhost',
    port: Number(process.env.MYSQLPORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
