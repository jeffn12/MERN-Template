var express = require('express');
var User = require('../models/user.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	User.find({}, (err, users) => {
		if (err) {
			console.error(err);
			res.send('Error retrieving users');
		} else {
			res.send(users);
		}
	});
});

module.exports = router;
