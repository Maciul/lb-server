var express = require('express');
var knex = require('../db/knex');
var queries = require('../db/queries');
var router = express.Router();

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

router.get('/', function(req, res) {
   res.json({ notes: req.query.notes });
});

module.exports = router;
