// setTimeout, setInterval, readFile etc are asynchronous file  
// reading a file, sending a network request and a deliberate timeout are some of the async functions

// a good website to visualise : latentphlip.com/loupe
// web APIs, callback queue, call stack, event loop

// async operations are delegated to web APIs and on completion, passed to callback queue and then pushed to call stack (via event loop) only when the thread becomes idle (free)

// ---------------------------------------- 

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    
    // console.log("data read from the file is: ")

    // suppose you write "a1.txt" instead of "a.txt" then you will get an error
    
    // error first callback

    if(err){
        console.log(err)
    }

    else{ 
        console.log(data);
    }

   
})


let ans = 0;
for(let i =0; i<1000; i++){
    ans += i;

}

console.log(ans);  // this gets printed before the data from the file 'a.txt' as readFile is an async fxn
