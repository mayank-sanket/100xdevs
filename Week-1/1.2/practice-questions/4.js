// Write a code that prints all the even numbers in an array

let arr = [1, 2, 3, 7, 11, 34, 23, 21, 67, 88, 90]

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}