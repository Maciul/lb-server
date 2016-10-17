exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments();
    table.string('body');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
