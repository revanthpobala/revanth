var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('/views/index.html', { root: '.' });
});


/* GET Resume. */
router.get('/resume', function(req, res, next) {
    res.sendFile('/views/resume.pdf', { root: '.' });
});

/* GET Photography. */
router.get('/photography', function(req, res, next) {
    res.sendFile('/views/photography.html', { root: '.' });
});


module.exports = router;
