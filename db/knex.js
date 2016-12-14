// environment is either production (node_env) OR development
var environment= process.env.NODE_ENV || "development";
// object that's hanging off the key of the environment that I'm in
var config = require('../knexfile')[environment];
//requiring knex module invoking it with config
var knex = require('knex')(config);
module.exports = knex;
