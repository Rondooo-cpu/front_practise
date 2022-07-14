Array.prototype.myFilter = function (callBack, thisArgument) {
    if (this == null) {
        throw new Error ('Object not iterable (null or undefinde)');
    }
    let ourThis = this;
    if (arguments.length > 1) {
        if (thisArgument == null) {
            throw new Error ('thisArgument in myFilter is not iterable'); 
        }
        else if (typeof thisArgument !== 'object') {
            throw new Error ('thisArgument in myFilter is not iterable');
        }
        else {
            ourThis = thisArgument;
        }    
    }
    const ourThisLength = ourThis.length;
    const filteredArray = [];
    for (let indexOfArray = 0; indexOfArray < ourThisLength; indexOfArray++) {
        if (ourThis[indexOfArray] !== undefined) {
            if (callBack(ourThis[indexOfArray], indexOfArray, ourThis)) {
                filteredArray.push(ourThis[indexOfArray]);
            }
        }
    }
    return filteredArray;
}