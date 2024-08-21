// promises syntax:

function mayankAsyncFxn(){
    let p = new Promise(function(res){
        res("Hey there!")
    })

    return p;
}

function main(){
    mayankAsyncFxn.then(function(value){
        console.log(value)
    })
}

// main()



// Async await syntax:

function anotherAsyncFxn(){
    let p = new Promise(function(res){
        res("hello there 2");
    })
    return p;
}

// notice the usage of keywords async only 

async function main2(){
    let value =  anotherAsyncFxn();
    console.log(value);
}

// main2()  

// prints Promise { 'hello there 2' } // notice that await keyword was not used


// notice the usage of both async and await keywords here:
async function main3(){
    let value =  await anotherAsyncFxn();
    console.log(value);

}

// main3(); 
// prints hello there 2 // notice that both async and await keywords are there



// ============================================================

function anotherfxnAsync(){
    return new Promise(function(res){
        setTimeout(function(){
            res('hello there dev');
        }, 1000)
    })
}
async function main4(){
    let value = anotherfxnAsync();
    console.log(value);
}


// main4(); 
// prints Promise {<pending>} because you did not use the await keyword

// =========================================

async function main5(){
    let value =  await anotherfxnAsync();
    console.log(value);
}


main5() // prints hello there dev after 1 second


// -----------------------------------------------------

/*
Advantages of using async await fxn:
1. no callbacks, no .then() syntax, cleaner code
*/