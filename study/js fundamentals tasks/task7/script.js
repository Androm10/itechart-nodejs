
function getLazy(fn) {
    return (...args) => () => fn(...args);
} 

function sum(a,b) {
    return a+b;
}

let lazySum = getLazy(sum);