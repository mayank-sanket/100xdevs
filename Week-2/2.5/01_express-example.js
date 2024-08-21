const express = require('express');
const app = express();
const port  = process.env.PORT || 3000;



function responseFxn(n){

    let sum = 0;   // reason why it is stored here is because every time the user passes a query, this function gets called and therefore having a global value for the 'sum' variable will cause problems in the next iterations as its initial value will not be zero
    
    for(let i=0; i<=n; i++){
        sum +=i;
    }

    return sum;
}

app.get('/', (req, res) =>{
    const n = req.query.n;               
    const ans = responseFxn(n).toString();
    res.send(`Your answer is ${ans}.`);
    

})

app.listen(port, ()=> {
    console.log(`app running on port: ${port}.`);
})