var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('testing notes');
  });

module.exports = router;
