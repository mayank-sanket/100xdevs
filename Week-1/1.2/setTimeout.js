function greet(){
    console.log("Hello Mayank!")
}

setTimeout(greet, 1000) // executes the fxn greet after 1 second

// in setTimeout fxn, the first argument is the function to be executed and the second argument is the time duration after which the function call will be made

function greetAlien(){
    console.log("Hello Alien!")
}

// setTimeout(greetAlien, 4*1000) // greetAlien fxn is called after 4 seconds (4000 ms)

// setTimeout(greetAlien(), 5000) // error : why? because you need to just pass the name of the function to be called after duration and not call the function directly