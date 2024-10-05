// const users = [
//     {name: "John", 
//         kidneys: [{healthy: true}, {healthy: true}, 

//     ]},
//     {
//         name: "Jane",
//         kidneys: [{healthy: true}, {healthy: false}]
//     }, 
//     {
//         name: "Doe",
//         kidneys: [{healthy: false}, {healthy: false}]
//     }
// ]



// default data (in-memory data)
 
const users = [
    {
        name: "John", 
        kidneys: [
            {
                healthy: true
            }, 
            
        ]
    }
]

// now we need to update this in memory data accordingly

const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

// app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res)=>{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    const numberofHealthyKidneys = johnKidneys.filter(kidney => kidney.healthy).length
    const numberOfUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys

   res.json({
    numberOfKidneys,
    numberofHealthyKidneys,
    numberOfUnhealthyKidneys
   })
    
})

app.post('/', (req, res)=>{
    const isHealthy = req.body.isHealthy;
    if(users[0].kidneys.length < 2){
        users[0].kidneys.push({healthy: isHealthy})
    }

    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res)=>{

    

    
    if(isThereAtLeastOneUnhealthyKidney()){
        users[0].kidneys = [{healthy: true}, {healthy: true}]

        res.json({message: "Done"})
    }

    else{
        res.status(411).json({
            msg: "No Unhealthy kidneys to repair"
        })
    }
    
})

// removing all the unhealthy kidneys
app.delete('/', (req, res)=>{
//    you should return a 411 if there are no unhealthy kidneys

    if(isThereAtLeastOneUnhealthyKidney()){
    const newKidneys =  [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){

            // pushes into newKidneys array only if the kidney is healthy
           newKidneys.push({healthy: true})
        }
    }
    users[0].kidneys = newKidneys;

    res.json({msg: "Done"})
    }

    else{
        res.status(411).json({
            message: "No Unhealthy Kidneys found"
        })
    }

    
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



function isThereAtLeastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}