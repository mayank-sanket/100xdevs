
// write a function to print the length of a string
function getLength(str){
    console.log("Original string: " + str)
    console.log("Length of string: " + str.length)

}

getLength("Mayank")

// write a function to get the index of a particular character in a string

function getIndex(str, target){
console.log("Original string: " + str)
console.log("Index of " + target + " is " + str.indexOf(target))

}

getIndex("Mayank", "n") //  4
getIndex("Mayank Sanket", "Sanket") //  7
getIndex("Mayank", "S") // -1





// in a string, a particular character occurs more than one time, write a code to get the index of the last occurence

function getLastIndex(str, target){
    console.log("Original string is " + str)
    console.log("Index of " + target + " is " + str.lastIndexOf(target))
}

getLastIndex("Mayank", "a") // 3



// write the function to get a slice of string
function getSlice(str, start, end){
    console.log("The original string is " + str)
    console.log("The sliced string is " + str.slice(start, end)) 
}

getSlice("Mayank", 1, 5) // ayan (5th index not included)


// try it

let name = "mayank";
console.log(name.slice(2, 4)) // ya
console.log(name) // mayank

let name2 = "sanket"
console.log(name2.substr(2, 3)) // nke  | start index, length of substring    | no longer used
console.log(name2.slice(2, 3)) // n     | start index, end+1 index 



// replacing a string by another

let str = "Mayank Sanket"
console.log(str.replace("Sanket", "Singh")) // Mayank Singh


// split
let abc = "hi my name is mayank sanket"

// let def =  abc.split(" ")
// console.log(def) // ['hi', 'my', 'name', 'is', 'mayank', 'sanket']

// or
console.log(abc.split(" "))


// trim - trims the extra space at the beginning and the end

let spName = "                     mayank                 "
console.log(spName.trim()) // mayank

let spName2 = "                     mayank    sanket     kumar singh     "
console.log(spName2.trim())  // mayank    sanket     kumar singh 



// toUpperCase and toLowerCase
console.log("Mayank".toUpperCase()) // MAYANK
console.log("Mayank".toLowerCase()) // mayank



// parseInt function  )(global fxn)

console.log(parseInt("34")) // 34
console.log(parseInt("34px")) // 34
console.log(parseInt("aa30")) //  NaN
console.log(parseInt(3.14)) // 3


// parseFloat function  (global)

console.log(parseFloat(34))  // 34
console.log(parseFloat("aaaccc34px")) // NaN
console.log(parseFloat("34aaaabcc")) // 34
console.log(parseFloat(34.12)) // 34.12

//_____________________________________________



// Array Methods

// Array methods: push(argument), pop(w/o argument )
// popping from the front - shift()
// pushing at the front unshift()


// concat

let arr1 = ["harkirat", "raj", "kunal"]
let arr2 = ["ram", "shyam", "karan"]

console.log(arr1.concat(arr2) ) // merges both the arrays, ie, [harkirat, raj..upto karan]

// another way - pushing the elements of arr2 to arr1
// for(let i=0; i<arr2.length; i++){
//     arr1.push(arr2[i])

// }

// console.log(arr1)

// forEach loop - syntax and working
function logThings(str){
    console.log(str);
}

let abcdef = [1, 2, 3, 4, 5, 6, 7, 8]
abcdef.forEach(logThings) // prints up to 8

// or

abcdef.forEach((a)=>{console.log(a)}) // you can pass anything as argument in the arrow fxn

// ----------------------------------------------------


