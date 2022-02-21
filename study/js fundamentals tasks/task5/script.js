function filter(array, callback) {

    if(!Array.isArray(array))
        return;

    if(!callback)
        return array;

    let res = [];
    
    for(let i=0; i < array.length; i++) {
        
        if(callback(array[i], i, array))
            res.push(array[i]);

    }

    return res;
}