function sum(a, b){
    return a+b;
}

const ans = sum(1,2);


// console.log(ans); // 3

// another way of writing the funciton:

const sumArrFn = (a,b) => {return a+b};

console.log(sumArrFn(2,34)) // 36


// if the fxn declaration is of only one line, then 'return' keyword is optional (this works only when you don't use '{}')

const smfxn2 = (x,y) => x+y;
console.log(smfxn2(10, 20));



const anotherFxn = a => a*2;
console.log(anotherFxn(3)); // 6


// DIFFERENCES BETWEEN arrow function and normal function declaration:

/*
1. different binding behaviour of "this" keyword in both types of declarations

*/