
exports.seed = function(knex, Promise) {
  return knex('canyons').del().then(function() {
    return Promise.all([
      knex('canyons').insert({name: 'Black Canyon', image: 'http://destinationcolorado.com/wp-content/uploads/2016/04/blackcanyongunnison1.jpg', description: 'Black Canyon is a place where the beautiful meets and intersects with the fucking amaze balls.'}),
      knex('canyons').insert({name:'Waimea Canyon', image:'https://upload.wikimedia.org/wikipedia/commons/2/27/Waimea_Canyon_mar_2010.jpg', description: 'And like flowers in the fields, that make wonderful views, when we stand on top of the Waimea Canyon in our wonderful fucking hues..'}),
      knex('canyons').insert({name:'Antelope Canyon', image:'https://www.silverspurtours.com/wp-content/uploads/2014/01/Antelope-Canyon-c-James-Yang.jpg', description: 'there’s a big dope wave yo!'})
    ]);
  });
};
