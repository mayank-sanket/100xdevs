const express = require('express');
const app = express();

const PORT = 3000;



function calcSum(x){
    let ans = 0;
    for(let i=0; i<x; i++)
        {
        ans = ans + i;
    }

    return ans;
    
}


app.get('/', (req, res)=>{
    const n = req.query.n;
    let final = calcSum(n);
    let finalString = final.toString();

    res.send(finalString);
})

app.listen(PORT, ()=>{console.log("server running on PORT 3000")});