exports.up = async function (knex) {
  return Promise.all([
    await knex.raw(`create database express_example`),
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("username", 100).notNullable();
      table.string("password").notNullable();
    }),
  ]);
};

exports.down = async function (knex) {
  return Promise.all([await knex.schema.dropTableIfExists("users")]);
};
