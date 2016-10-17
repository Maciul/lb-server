var express = require('express');
var router = express.Router();
var notes = require('./notes');

router.use('/notes', notes);


router.get('/', function(req, res, next) {
  res.send('testing index');
  });

module.exports = router;
