
function firstFunction(){
    return new Promise(function(resolve){
        resolve(function(){
            return new Promise(function(resolve){
                resolve();

            })
        })
    })
}

