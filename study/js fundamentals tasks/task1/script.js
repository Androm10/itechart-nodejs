
//sum of all args
function G(...args) {
    return args.reduce( (sum, item) => sum + item);
}

//partial func
function F(fn, ...args) {
    return (...otherArgs) => {
        return fn(...args, ...otherArgs);
    }
}


sumFromFive = F(G,5);
