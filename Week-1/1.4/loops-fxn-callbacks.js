// DRY principle

// applications of callback fxn 

// ---------------------------------------

//bad approach  because DRY principle is being violated here
function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function sumOfSquares(a, b){
    const val1 = square(a)
    const val2 = square(b)
    return val1 + val2
}

function sumOfCubes(a, b){
const val1 = cube(a)
const val2 = cube(b)
return val1 + val2
}

console.log(sumOfCubes(1, 2)) // 9



// better approach - follows DRY principle


function sumOfSomething(a, b, fxn){
    const val1 = fxn(a)
    const val2 = fxn(b)
    console.log(val1+val2)
}

sumOfSomething(2, 3, square) // 13
sumOfSomething(2, 3, cube) // 35


//----------------------

// Anonymous functions

// in the above fxn call, we passed the function cube
// we could have also passed the function directly

sumOfSomething(2,3, function cube (a){
    return a*a*a
}) // prints 35

// but the question is - do we need to have a name for the cube function in this approach? ans: No

sumOfSomething(2,3, function (a){ // passing the fxn without its name
    return a*a*a
}) // prints 35
