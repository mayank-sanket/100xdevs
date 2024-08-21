const express = require('express');
const app = express();

const port = process.env.PORT || 3001;


// using query parameters: 
// in browser URL, you would have noticed something like: https://www.google.com/?name=123&age=22

app.post('/search', (req, res)=>{
    
    const age = req.query.age;
    const name = req.query.name;

    console.log(age); // prints 23 on the console (given that you sent a POST request via POSTMAN: http://localhost:3004/?age=23)

    console.log(name);

    res.send("hey there!");
})

app.listen(port, ()=>{
    console.log(`app running on the server ${port}`)
})



// most of the time we use query parameters. 
// we don't use body because of several reasons, such as security

// express does not parse the body by default because of several reasons


// we can use body-parser. The body-parser module enables us to parse incoming request bodies in a middleware.

// Express.js server needs to know what type of data you are sending over the network, so it knows how to parse it