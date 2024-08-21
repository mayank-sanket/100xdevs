// callbacks: function inside function

// some examples of callbacks: setTimeout, setInterval

// illustration of a callback function

// here the function fxntoCall

function arithmeticOperation (num1, num2, fxnToCall){
return fxnToCall(num1, num2)

}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a*b
}

function divide (a, b) {
    if(b==0) {
        console.log("You can't divide a number by zero!")
    
    }
    if(b!=0){
        return a/b
    }
}


console.log(arithmeticOperation(2, 3, add)); // passing parameters : num1, num2, and function to call
console.log(arithmeticOperation(2, 0, divide))