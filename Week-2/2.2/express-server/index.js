const express = require("express");
const app = express();
const PORT = 3000;




// body-parser

const bodyParser = require("body-parser");

app.use(bodyParser.json()); // now if you try console.log(req.body) in a POST request, you will see it on the console.


app.get('/', (req, res)=>{
    res.send(`Hello user!`);


    
})

// try to do this also

app.get('/dummy', (req, res)=>{
    res.json({"name": "Mayank", "age": 22 , "location": "New Delhi"});
})

app.get('/boldtext', (req, res)=>{
    res.send('<b>Hey there!</b>')
})

// important: 

app.get('/xyzabc', (req, res)=>{
    res.status(401).send("You need to enter the password first");  // also sends the status code alongwith response
})

app.post('/conversations', (req, res)=>{





    // console.log(req.headers); // you will get an object with multiple key-value pairs, one of them being the authorization that you set using POSTMAN
    // console.log(req.headers["authorization"]); // prints the authorization value in the console


    // console.log(req.body); // prints undefined because express.js does not let you do it
    // for this, you need to install body-parser via npm


    console.log(req.body); // after using the body-parser package
    // prints whatever you sent in the body via POSTMAN

    

    res.send({
        msg: "2 + 3 = 5",
        
        // also send some headers using POSTMAN, eg Authorization header
    })


    
})



// -----------------------------------------
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})