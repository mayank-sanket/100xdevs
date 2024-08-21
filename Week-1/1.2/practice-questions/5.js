// write the program that prints the biggest number and the smallest number in the array

let arr = [1, 2, 45, 67, 98, 87, 101, 234, 178, 675, 999, 1900, 234]


// to find the max value in the array

let maxElem = Number.MIN_VALUE
for(let i =0; i<arr.length;i++){
    if(arr[i]>maxElem) maxElem =arr[i]
}

console.log(`Maximum Value: ${maxElem}`);


// to find the minimum value in the array

let minElem = Number.MAX_VALUE

for(let i = 0; i<arr.length; i++){
    if(arr[i]<minElem) minElem = arr[i]
}

console.log(`Minimum Value: ${minElem}`)