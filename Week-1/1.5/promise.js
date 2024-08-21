const fs = require("fs");




// my own async fxn (wrapper) - illustration | ugly code

function mayanksReadFile(cb){

    
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    });

}



// callback function to call

function onDone(data){
    console.log(data);
}


mayanksReadFile(onDone);


// BETTER CODE:

function mayankAsyncFxn(){
    return new Promise(function(resolve){   // instance of Promise class  || p =  new Promise(function(res,rej){})

        fs.readFile('a.txt', 'utf8', function(err, data){
            resolve(data);
        })
    })

    // return p || if it were like p = new Promise(fn(res, rej){ ... })

}

// callback fxn to call

function onDone(data){
    console.log(data);
}

mayankAsyncFxn().then(onDone)


// can also do something like:

// let a = mayankAsyncFxn()   || console.log(a) --> (promise) | browser
// a.then(onDone())



