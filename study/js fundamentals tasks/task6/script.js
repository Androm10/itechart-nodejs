
function averageOfEven(array) {

    let evenArray = array.filter( (item) => {
        if(item % 2 == 0 )
            return true;
    });

    return evenArray.reduce((sum,item)=> sum+item) / evenArray.length;

}