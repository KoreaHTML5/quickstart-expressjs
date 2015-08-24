var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({meta:"user"});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json({meta:"register"});
});

module.exports = router;
