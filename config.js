require("dotenv").config()
const BaseUrl = process.env.BaseUrl || "http://localhost:5000/";
const development = {
    username:  process.env.DBUSERNAME || "postgres",
    password: process.env.DBPASSWORD || "1234",
    database: process.env.DBDATABASE|| "test",
    host: process.env.DBHOST || "127.0.0.1",
    dialect: process.env.DBDIALECT || "postgres"
  }

module.exports = {BaseUrl, development};
