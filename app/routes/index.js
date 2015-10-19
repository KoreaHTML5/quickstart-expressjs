'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quickstart for ExpressJS',maintainer: {
    name: 'webframeworks admin',
    twitter: '@webframeworks_kr',
    blog: 'blog.webframeworks.kr'
  } });
});

module.exports = router;
