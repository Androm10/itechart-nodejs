
function linear(array, callback, initialValue) {

    let i;
    let prev;

    if(!initialValue) {
        i = 1;
        prev = array[0];
    }
    else {
        i=0;
        prev = initialValue;
    }

    for(; i< array.length; i++) {

        prev = callback(prev, array[i], i);

    }
    return prev;
}

let mas = [4,5,1,2,8,-4];