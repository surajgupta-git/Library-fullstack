var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('createaccount', { title: 'Create Account'});
});

module.exports = router;