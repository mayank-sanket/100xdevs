// promises are just syntactical sugar for callbacks

// writing our own async functions

// Approach 1: (wrapping over the original JS async function)

// it uses callback. it is good but can lead to callback hell

function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration) // this is the function that actually gets delegated to web API
}


myOwnSetTimeout(function(){
    console.log("hey there")
}, 1000)


//  what if you do this? BAD NESTING -- leads to callback hell

 
// setTimeout(function(){
//     console.log("hi there")

//     setTimeout(function(){
//         console.log("inside the second one")
//     }, 2000)
// }, 1000)



// ------------------------------------------------------




// Approach 2: using Promises         const prms = new Promise(function(res, rej){})

function myOwnSetTimeout2 (duration){
    let p = new Promise(function(resolve){
        // after 1 sec, call resolve
        setTimeout(resolve, duration );
    });
    return p;

}
 
myOwnSetTimeout2(1000)
.then(function(){
    console.log("log the first thing")
})

// or 

// const ans = myOwnSetTimeout2(1000)
                           // what if you do: console.log(ans) : something like | Promise{<pending>} (it is an object) 
// ans.then(function(){
//     console.log("timeout is done")
// })









 // an interesting example:
//  function someSyncTask1(){
//     console.log("some sync task 1")
//  }

//  function someSyncTask2(){
//     console.log("some sync task 2")
//  }

//  setTimeout(function(data){
//     someSyncTask2(data);

//  }, 1000)
//  someSyncTask1()


// promise chaining

function promisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
    return p;
}

promisifiedTimeout(1000).then(function(){
    console.log("first one is done");
     promisifiedTimeout(2000);
})
.then(function(){
    console.log("second one is done")
})


// a good example of what promisified fxn can return

// function getPromises(){
//     let p1 = new Promise()
//     let p2 = new Promise()
//     return [p1, p2]
// }

// const x = getPromises()

// x[0].then()
// x[1].then()


// read more about Promise.all() 




// ------------------
setTimeout(function(){
    console.log("akdjfkdjf")
}, 1000)
// can also be written as:
setTimeout(1000).then(function(){
    console.log("dkfjdkfjd")
})  



//---------------------------------------------------

// Approach 3: using async-await

async function myGoodFn(){
    let response = await fn();
    return response;
}

// explore if there can be something like multithreading in JavaScript using external libraries or not