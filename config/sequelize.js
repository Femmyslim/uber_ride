require('dotenv').config()
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize
(   process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_Port,
        dialect: 'mysql' // 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' 
    }
);


module.exports= sequelize