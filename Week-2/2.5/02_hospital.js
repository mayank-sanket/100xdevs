const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(request, response){
    response.send(
        `<div>
        <h1>
        Express Backend Server
    </h1>
    <h2>
        Welcome User!
        Please pass your query in  the URL
    </h2>
    </div>`
    )
})

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
    console.log('Hello from Server!')
})