'use strict';

var express = require('express');
var router = express.Router();

var r = require("../lib/apiResponse");
var d = require("../lib/dbHelper");

/* GET users listing. */
router.get('/', function(req, res, next) {
  d.query('select * from tk_uit.employee', function (err, data){
    if (err) r.result(res, 500, 5000, "",{});
    r.result(res, 200, 0, "",{name:data});


  });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  r.result(res, 200, 0, "",{name:"register"});
});

module.exports = router;
