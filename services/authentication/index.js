'use strict';

// a function to check if the user is logged in
module.exports.isLoggedIn = function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();

    } else {
        return res.redirect('/');
    }
};
