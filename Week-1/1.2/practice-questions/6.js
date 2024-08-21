// Write a program that prints all the male people's name given a complex object 

let peopleArray=[
    {
        name: "Mayank",
        age: 22,
        gender: "male"
    },
    {
        name: "Diya",
        age: 20,
        gender: "female"
    },
    {
        name: "Megha",
        age: 19,
        gender: "female"
    },
    {
        name: "Rahul",
        age: 22,
        gender: "male"
    },
    {
        name: "Raj",
        age: 24,
        gender: "male"
    },
    {
        name: "Shreya",
        age: 19,
        gender: "female"
    },

    {
        name: "Sanket",
        age: 22,
        gender: "male"
        
    }
]

for(let i=0; i<peopleArray.length; i++){
    if(peopleArray[i]["gender"] == "male"){
        console.log(peopleArray[i]["name"])
    }
}



// ------------------------------------------


// console.log("another way of printing data from objects using dot notaions")


// for(let i=0; i<peopleArray.length; i++){
//     if(peopleArray[i].gender=="male"){
//         console.log(peopleArray[i].name)
//     }
// }




console.log("--------------------")

// another way to do without using objects concept (but the concept of object is a better way do do this)

// let nameArray = ["Mayank", "Diya", "Megha", "Rahul", "Raj", "Shreya", "Sanket"]
// let ageArray = [22, 20, 19, 22, 34, 19, 22]
// let genderArray = ["male", "female", "female", "male", "male", "female", "male"]

// for(let i=0; i<nameArray.length; i++){
//     if(genderArray[i]=="male"){
//         console.log(nameArray[i])
//     }
// }