
function averageOfEven(array) {

    if(!Array.isArray(array) || !array.length)
        return;

    let evenArray = array.filter( (item) => {
        if(item % 2 == 0 )
            return true;
    });

    if(!evenArray.length)
        return;

    return evenArray.reduce((sum,item)=> sum + item) / evenArray.length;

}