function incr(a) {
    return a+1;
}

function memoizator(fn) {

    let cache = {};

    return (value) => {

        if(cache.hasOwnProperty(value)) {
            
            console.log("has been in cache");
            return cache[value];
        
        }
        else {

            console.log("added to cache");
            return cache[value] = fn(value);

        }

    }

}

let memIncrement = memoizator(incr);