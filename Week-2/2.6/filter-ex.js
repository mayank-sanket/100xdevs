const names = ["mayank", "mehul", "priyank"];

// return all the names that start with "m";


const ans = names.filter(function(nm){
    if(nm.startsWith("m")) return true;
    else return false;
})

console.log(ans)   ['mayank', 'mehul']