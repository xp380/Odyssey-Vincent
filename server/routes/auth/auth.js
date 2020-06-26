const express = require('express');
const router = express.Router();
// const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {

    res.send('I am in POST signup');
    
    });

module.exports = router;
