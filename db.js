var K = require("knex");

const conn = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  charset: "utf8",
};

const knex = K({ client: "mysql", connection: conn });

knex
  .raw("CREATE DATABASE IF NOT EXISTS express_example")
  .then(function () {
    console.log("database created");
    knex.destroy();
  })
  .catch(function (err) {
    console.error("error creating database:", err);
    process.exit(1);
  });
