
exports.up = function(knex) {
    return Promise.all([
        await knex.raw(`insert into users (username, password) values ("user1", "password1")`),
        await knex.raw(`insert into users (username, password) values ("user2", "password2")`)
      ]);
};

exports.down = function(knex) {
  
};
