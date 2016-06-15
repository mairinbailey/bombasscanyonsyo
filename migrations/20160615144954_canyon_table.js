
exports.up = function(knex, Promise) {
  return knex.schema.createTable('canyons', function(table){
    table.increments();
    table.string('name');
    table.string('image');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('canyons')
};
