// console.log("hi")

// // nesting async function inside async fxn
// setTimeout(function(){
//     console.log("outer")
//     setTimeout(function(){
//         console.log("inner")
//     }, 4000)
// }, 3000)



// ----------------

// function promisifiedTimeout(duration){
//     const p = new Promise(function(resolve){
//         setTimeout(resolve, duration)
//     })
//     return p
// }

// promisifiedTimeout(1000).then(function(){
//     console.log("first one is done");
//      promisifiedTimeout(2000)
// })
// .then(function(){
//     console.log("second one is done")
// })

//----------------------


