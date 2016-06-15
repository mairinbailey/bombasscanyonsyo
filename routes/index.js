var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('canyons').select().then(function (canyons) {
    res.render('index', {canyons: canyons});
  });
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.get('/:id', function(req, res, next) {
  knex('canyons').where({id: req.params.id}).first().then(function(canyon) {
    res.render('detail', {canyon: canyon});
  });
});

router.post('/:id/edit', function(req, res, next) {
  knex('canyons').where({id:req.params.id}).first().then(function(canyon) {
    res.render('edit', {canyon:canyon});
  });
});

router.get('/:id/edit', function(req, res, next) {
  knex('canyons').where({id: req.params.id}).first().then(function(canyon) {
    res.render('edit', {canyon: canyon});
  });
});

router.get('/:id/delete', function(req,res,next) {
  knex('canyons').where({id: req.params.id}).del().then(function() {
    res.redirect('/')
  })
})

router.post('/create', function(req, res, next) {
  knex('canyons').insert(req.body).then(function() {
    res.redirect('/');
  }).catch(function(err) {
    console.log(err);
    next(err);
  });
  });


module.exports = router;
