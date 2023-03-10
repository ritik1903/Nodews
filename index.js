const express = require('express');
const app = express();
const port = 8000;

//Use express router
app.use('/', require('./routes'));


//setup the template engine or view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        // console.log("Error:",err);
        console.log('Error in running the server:', err);
    }
    console.log('Server is running on the port:' , port);
});