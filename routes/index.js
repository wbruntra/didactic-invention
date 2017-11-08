var express = require('express');
var router = express.Router();
const { SECRET } = process.env;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { secret: SECRET });
});

module.exports = router;
