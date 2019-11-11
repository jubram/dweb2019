var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/api/premios', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
