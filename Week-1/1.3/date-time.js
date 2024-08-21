// Date is an inbuilt class in JS

const currentDate = new Date();
console.log(currentDate.getMonth() + 1 )// gives the current month (+1 due to zero based indexing)
console.log(currentDate.getFullYear()) // present year , ie 2024

// console.log(currentDate.getYear()) // 2024 -1900 = 124

const currentDate2 = new Date();

console.log(currentDate2.getTime()) // prints a large number

console.log(currentDate2.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())


// getTime()
const currdt = new Date();
console.log("Time in milliseconds since 1970: ", currdt.getTime());

//application of the above: calculate the time taken for the execution of a function

function calculateSum(){
    let a = 0;
    for(let i=0; i<100000000; i++){
        a = a+i;
    }
    return a;
}
const beforeDate = new Date()
const beforeTimeInMs = beforeDate.getTime()
calculateSum()

const afterDate = new Date()
const afterTimeInMs = afterDate.getTime()

console.log(afterTimeInMs-beforeTimeInMs)


