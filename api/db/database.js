const Sequelize = require("sequelize");

const db = new Sequelize("tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  port: 5433
});

module.exports = db;