function requireLogin(req, res, next) {
    if(!req.session.user){
        console.log('Login failed: invalid credentials')
        return res.redirect('/login');
    }
    next();
}

module.exports = requireLogin;