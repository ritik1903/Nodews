module.exports.home = function(req, res){
    return res.end('<h1>Express is up for codeial</h1>');
};

module.exports.profile = function(req,res){
    return res.end('<h1>My express profile page is up to running!</h1>');
};