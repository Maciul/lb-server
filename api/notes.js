var express = require('express');
var knex = require('../db/knex');
var queries = require('../db/queries');
var router = express.Router();


router.get('/', function(req, res,next) {
  if (req.query.query) {
   queries.searchNote(req.query.query).then(function(data) {
     res.json({ data: data });
   });
 } else {
   next();
 }
});

router.get('/', function(req, res, next) {
  queries.getAllNotes().then(function(data){
    res.json({ data: data });
  });
});

router.get('/:id', function(req, res, next) {
  queries.getOneNote(req.params.id).then(function(data) {
    res.json({ data: data });
  });
});

module.exports = router;
