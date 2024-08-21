// filtering:

// given an input array, give me back all the even values fromn it


// method 1: ugly way

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 23, 28];

const newArr = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        newArr.push(arr[i]);
    }
}

console.log(newArr); // [2, 4, 6, 8, 28]

// ---------------------------------



// method 2: filter 

// approach: create a filtering logic which returns boolean


function myLogic(n){
    if(n%2==0) return true;
    else return false;
}


const ans3 = arr.filter(myLogic);
console.log(`ans3: ${ans3}`);   // 2,4,6,8,28



// other syntax for the filter method: the right way


const ans4 = arr.filter(function(n){
    if(n % 2 == 0) return true;
    else return false;
})


console.log(`ans4: ${ans4}`)