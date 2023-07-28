var express = require('express');
var router = express.Router();

//https:localhost:3000/index
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;