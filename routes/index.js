var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(req,res){
	var tweets = tweetBank.list();
	res.render('index', { tweets: tweets } );
});

// router.get('/style')

module.exports = router;