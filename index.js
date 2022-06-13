// import express
const express = require('express');
const app = express();

const port = 8002;

// import path module
const path = require('path');

// import body parser module
const bodyparser = require("body-parser");


// parse request to body parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set('view engine', ejs);
// app.set('views', path.resolve(__dirname, "views/filename")); //if your ejs file is inside another files in views 

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));

app.get('/', (req,res)=>{
    res.send('to do app');
});

// listen   
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`server is running on port:${port}`);

})