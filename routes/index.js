var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// List all canyons
router.get('/canyon', function(req, res, next) {
  knex('canyons').select().then(function (canyons) {
    res.render('index', {canyons: canyons});
  });
});

// Render create page/form
router.get('/canyon/create', function(req, res, next) {
  res.render('create');
});

// Display single canyon by id
router.get('/canyon/:id', function(req, res, next) {
  knex('canyons').where({id: req.params.id}).first().then(function(canyon) {
    res.render('detail', {canyon: canyon});
  });
});

//Display edit page for single canyon
router.get('/canyon/:id/edit', function(req, res, next) {
  knex('canyons').where({id: req.params.id}).first().then(function(canyon) {
    res.render('edit', {canyon: canyon});
  });
});

//Send put request to update single canyon
router.put('/canyon/:id', function(req,res,next){
  knex('canyons').where({id: req.params.id}).update(req.body).then(function(){
    res.redirect('/canyon/' + req.params.id)
  })
})

// Update post using post instead of put/method override
// router.post('/canyon/:id/edit', function(req, res, next) {
//   knex('canyons').where({id:req.params.id}).update(req.body).then(function(canyon) {
//     res.redirect('/canyon/' + req.params.id);
//   });
// });


// Delete post using get instead of delete/method override
// router.get('/canyon/:id/delete', function(req,res,next) {
//   knex('canyons').where({id: req.params.id}).del().then(function() {
//     res.redirect('/canyon');
//   });
// });

//Delete single canyon and redirect home using put request and method override
router.delete('/canyon/:id', function(req,res,next){
  knex('canyons').where({id: req.params.id}).del().then(function(){
    res.redirect('/canyon');
  })
})

//Create new canyon and load it's single canyon view
router.post('/canyon/create', function(req, res, next) {
  knex('canyons').insert(req.body).returning('id').then(function(id) {
    res.redirect('/canyon/'+ id);
  }).catch(function(err) {
    console.log(err);
    next(err);
  });
  });


module.exports = router;
