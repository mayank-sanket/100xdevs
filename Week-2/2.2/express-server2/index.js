const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');



app.use(bodyParser.json());


// or you could also use express.json() | syntax: app.use(express.json())

app.post('/backend-api/conversations', (req, res)=>{

    
    const message = req.body.message;   // from the JSON you sent you via POSTMAN
    console.log(message)
    

    // do some ML stuff here for example

    // .........

    res.json({
        output: "2 + 2 is 4"
    })

    

})

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}.`)
})