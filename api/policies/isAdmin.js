module.exports = function (req, res, next) {
    if (req.headers.authorization === 'my secret key') {
        //User.findOne(req.param('id')).exec(function(err, user){
        //    if(user.password === req.param('password')){
        //        next();
        //    }
        //});

        next();
    } else {
        return res.forbidden('No valid Authorize header passed.');
    }
};