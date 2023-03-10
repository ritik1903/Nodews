module.exports.home = function(req, res){
    return res.render('home', {
        title : "Home"
    });
};

// module.exports.profile = function(req,res){
//     return res.end('<h1>My express profile page is up to running!</h1>');
// };