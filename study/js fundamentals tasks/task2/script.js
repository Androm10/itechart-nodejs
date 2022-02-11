
function sum(a,b,c) {
    return a+b+c;
};

function curry(func) {
    
    return function curried(...params) {

        if(params.length >= func.length) {
            return func.apply(this, params);
        } else {
            return function(...otherParams) {
                return curried.apply(this, params.concat(otherParams));
            }
        }

    };
}

curriedSum = curry(sum);


