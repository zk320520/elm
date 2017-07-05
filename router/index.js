const express = require('express');
const router = express.Router();
const User = require('../models/index');

router.post('/user', (req, res) => {
    console.log(req);
    User.save({name: req.body.name, password: req.body.password}, function(err) {
        if (err) {
            res.json(err);
        } else {
            res.json({ 'status': 'success' });
        }
    })
       
});

module.exports = router;