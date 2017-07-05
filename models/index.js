const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    password: String,
});

const User = mongoose.model('User', userSchema);
const UserDao = function() {};

UserDao.prototype.save = function(obj,callback) {
     let user = new User(obj);
     user.save(function(err) {
         callback(err);
     });
 };

 module.exports = new UserDao();