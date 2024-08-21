
// NOTE: 

// .catch() is used to catch error






// function promisifiedTimeout(duration){
//     const p = new Promise(function(res, rej){
//         setTimeout(res, duration);
//     })
//     return p;

// }
// promisifiedTimeout(1000).then(function(){
//     console.log("first timeout done")
//     promisifiedTimeout(1000).then(function(){
//         console.log("second one is done")
//     })
// })


// after 1 second: first timeout is done
// after 1 another second: second timeout is done





// promise chaining 

function promisifiedTimeout2(duration){
    const p = new Promise(function(res, rej){
        setTimeout(res, duration);
    });
    return p;

}

promisifiedTimeout2(1000).then(function(){
    console.log("first one is done")
    return promisifiedTimeout2(1000)
}).then(function(){
    console.log("second one is done")
});