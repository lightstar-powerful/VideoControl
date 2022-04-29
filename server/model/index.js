const config = require("../config/database.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const videoDB = {};

videoDB.Sequelize = Sequelize;
videoDB.sequelize = sequelize;

videoDB.video = require("./video.js")(sequelize, Sequelize);
videoDB.videometadata = require("./videometadata.js")(sequelize, Sequelize);

module.exports = videoDB;
