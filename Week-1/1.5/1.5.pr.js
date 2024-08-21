


// let p = new Promise();
// console.log(p); // error


let pr = new Promise(function(res, rej){})  // a function with the first parameter as 'resolve' is required
console.log(pr); // no error : Promise {<pending>}

let prms  = new Promise(function(res){})
console.log(prms); // no error

let prom = new Promise(function(onDone){})
console.log(prom); // no error


// ----------------------------------------------------------------------------------------------------------

let d = new Promise(function(res){
    setTimeout(function(){
        res("FOO")

    }, 1999)

})


function callback(){
    console.log(d);
}

console.log(d);   // Promise {<pending>}

d.then(callback);  // Promise { "FOO" }