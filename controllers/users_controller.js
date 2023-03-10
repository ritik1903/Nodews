module.exports.profile = function(req,res){
    // return res.end('<h1>User Profile!</h1>');
    return res.render('users', {
        title : "We are on the user profile page!"
    });

}