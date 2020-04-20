const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    database: "express_example",
    user: process.env.DB_USER || "sa",
    password: process.env.DB_PASSWORD || "password",
  },
  ...knexSnakeCaseMappers(),
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
};
