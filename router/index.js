const express = require('express');
const router = express.Router();
const User = require('../models/index');

router.get('/user', (req, res) => {
    User.save({name: req.query.name, password: req.query.password}, function(err) {
        if (err) {
            res.json(err);
        } else {
            res.json({ 'status': 'success' });
        }
    })
       
});

module.exports = router;