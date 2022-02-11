
function map(array, callback) {
    
    let res = [];

    for(let i=0; i<array.length; i++){
        res.push(callback(array[i]));    
    }
    
    return res;
}