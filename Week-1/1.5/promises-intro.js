function findSum2(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans +=i;
    }
    console.log(ans)
}

function findSumTill100(){
    return findSum2(100)
}

setTimeout(findSumTill100, 1000)
console.log("Hey there!")

// the above code is ugly 
// promises are syntactical sugar that make this code slightly more readable
// under the hood, promises also  callback queue, event loop, call stack



// REAL USE OF CALLBACKS:

const fs = require('fs');
function mayankReadFile(cb){
    fs.readFile('a.txt', 'utf8', function(err, data){
        cb(data);
    });

}

//callback fxn to call:
function onDone(data){
    data += " hey there (readonly)"
    console.log(data);

}


mayankReadFile(onDone)


// the above code is ugly
// we generally use Promises for such cases




