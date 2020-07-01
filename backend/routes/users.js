var express = require('express');
var userModel = require('../models/user.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
