// import express
const express = require('express');
const app = express();
const port = 8002;

app.get('/', (req,res)=>{
    res.send('to do app');
});

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`server is running on port:${port}`);

})