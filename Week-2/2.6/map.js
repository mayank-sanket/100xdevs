// given an array, give me back a new array in which every value is multiplied by 2



// [1, 2, 3, 4, 5, 6]
// [2, 4, 6, 8, 10, 12]

// solution:

// method 1:

const input = [1, 2, 3, 4, 5, 6];

const newArray = [];

for(let i =0; i<input.length; i++){
    newArray.push(input[i]*2);
}

console.log(newArray);

// method 2: using map function (better)



const input2 = [1, 2, 3, 4, 5];

function transformationFxn(i){
    return i*2;
}


const ans = input2.map(transformationFxn)
console.log(ans);

console.log(input);
console.log(input2);


    

// other syntax of using map  : the right way

const ans2 = input2.map(function(i){
    return i*2;
})

console.log(`Ans2: ${ans2}`);












// understand the working of map function

/*

arr: [1, 3, 5, 7]

transformationFxn: function(i){
return i*3;
}

map function: map(arr, transformationFxn)

*/

