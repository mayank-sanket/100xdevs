// objectives:
/*
1. async functions vs sync functions
2. real use of callbacks
3. JS Browser Architecure
4. Promises
5. Async Await

*/

// context switch
// 


// synchronous functions

function findSum(n){
    let ans = 0;
    for(let i =0; i<n; i++){
        ans+=i;
    }
    return ans;
}

console.log(findSum(6));

//-------------------------------------


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




// async fxns

setTimeout(findSumTill100, 1000)
console.log("Hey there!")

// some common async functions: 
// setTimeout
// fs.readFile - to read a file form your filesystem
// fetch - to fetch some data from an API endpoint