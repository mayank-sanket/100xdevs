

function anotherAsyncFxn(){
    return new Promise(function(res){
        setTimeout(function(){
        res("timeout hello")
        }, 2000)
    })
}

function main(){
    anotherAsyncFxn().then(function(value){
        console.log(value);
    })

    console.log("another hi there")
}

// main(); 


// output: first line - another hi there      second line- timeout hello



async function main2(){
    let val = await anotherAsyncFxn();
    console.log(val);


    console.log("another hi there")
}

// main2(); 

// output: first line - timeout hello | second line - another hi there 


// explanation: the control gets hold till it gets the val as output
// in promises syntax for asynchronous function, the program keeps running and when the promise is resolved, it performs the action depending on whether the thread is free or not


// does this mean that the thread gets held? NO NO NO

// example: if you write something outside the main2 fxn, it will still get logged till your value is being fetched

async function main3(){
    let val = await anotherAsyncFxn();
    console.log(val)


    console.log("hey there again");
}

main3();

console.log("after main")


// output: first line - after main (this is outside the main function) | second line - timeout hello - hey there again