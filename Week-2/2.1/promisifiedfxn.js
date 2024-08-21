console.log("at the top 1");

function promisifiedTimeout(){
    console.log("function called 3")
    return new Promise(function(resolve){
        console.log("inside promise 4")
        setTimeout(function(){
            console.log("setTimeout called 5")
            resolve("done baby! I am burnt out.")
        }, 3000)
    })
}

console.log("in the middle 2")



promisifiedTimeout().then(function(value){
    console.log("promisified then 6")
    console.log(value);
})