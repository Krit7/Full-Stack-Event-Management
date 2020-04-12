const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const settings = require('../config/settings')

register = (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.log(err)
            } else {
                bcrypt.hash(password, salt, null, (err, hash) => {
                    if (err) {
                        console.log(err)
                    } else {
                        const hashpassword = hash
                        const newUser = new User({
                            username: username,
                            password: hashpassword
                        });
                        User.create(newUser, (err) => {
                            if (err) {
                                return res.json({ success: false, msg: 'Username already exists.' });
                            }
                            res.json({ success: true, msg: 'Successful created new user.' });
                        });
                    }
                });
            }
        });

    }
}

login = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        User.findOne({
            username: username
        }, function (err, user) {
            if (err) {
                throw err;
            }
            if (!user) {
                res.json({ success: false, msg: 'Authentication failed. User not found.' });
            } else {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return callback(err);
                    }
                    if (isMatch && !err) {
                        // if user is found and password is right create a token
                        const token = jwt.sign(user.toJSON(), settings.secret);
                        // return the information including token as JSON
                        res.json({ success: true, token: 'JWT ' + token });
                    } else {
                        res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
                    }

                });

            }
        });
    }
}

module.exports = {
    register,
    login
}