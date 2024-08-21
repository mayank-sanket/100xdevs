const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// environment variable

const PORT = process.env.PORT || 3004;  // for this you need to do this in the terminal export PORT="any value" , eg: export PORT=3000 


// NOTE:  it's not mandatory to use the term 'PORT' on LHS, you can give any name as per your choice




app.get('/home', (req, res)=>{
    res.send("Welcome to the webpage")
})



app.listen(PORT, ()=>{
    console.log( `app running on port ${PORT}`)
})