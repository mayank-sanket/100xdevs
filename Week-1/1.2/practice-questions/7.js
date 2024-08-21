// Write a program that reverses all the elements of an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// printing the elements in the reverse order

// for(let i = arr.length-1; i>=0; i--){
//     console.log(arr[i])

// }

// how to reverse the actual array



// creating a blank array
let arr_rev = []

for(let i=0; i<arr.length; i++){
    arr_rev[i] = arr[arr.length-1-i]
}

// storing the reversed array in the original array
arr = arr_rev

// printing the array elements after reversing it
for(let i=0; i<arr.length; i++){
console.log(arr[i])
}


// some other methods: using reduce method | using map function | using reverse method | using unshift method | using recursion | 
