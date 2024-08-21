// reading a file is an example of async function

const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data)
})



console.log("hi there") // even though this line is below, it's executed first (because reading file is an asynchronous task as it takes time to read files)

let sum = 0;
for(let i=0; i<10; i++){
    sum+=i;
}

console.log(sum) // this line is executed after "hi there"

// note: to understand the working of async functions, call stacks, web APIs, callback queue, etc, there is this website: 
// http://latentflip.com/loupe

// the real use of callback functions is in async functions and not that much used in async functions