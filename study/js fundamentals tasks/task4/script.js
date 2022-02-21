
function map(array, callback) {
    
    if(!Array.isArray(array))
        return;

    if(!callback)
        return array;

    let res = [];

    for(let i=0; i<array.length; i++){
        res.push(callback(array[i]));    
    }
    
    return res;
}