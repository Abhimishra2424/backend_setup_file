const { Sequelize } = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    timezone: '+05:30', // Set the timezone to Indian Standard Time (IST)
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.test = require("./models/test.model")(sequelize, Sequelize);

db.sequelize
    .sync({ force: true })
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch((error) => {
        console.error("Error syncing database:", error);
    });

module.exports = db;
