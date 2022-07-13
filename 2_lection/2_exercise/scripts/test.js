function selectFromInterval(array, firstNumber, secondNumber) {
    const newArray = [];
    if (!Array.isArray(array)){
        throw new Error ('В функцию передан не массив!');
    }
    for (let indexOfArray = 0; indexOfArray < array.length; indexOfArray++){
        if (typeof array[indexOfArray] !== 'number'){
            throw new Error ('В массиве присутствуют не только числа!');
        }
    }
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number'){
        throw new Error ('В качестве границ передано не два числа');
    }
    if (secondNumber < firstNumber){
        const variableForSwapFirstAndSecondNumber = firstNumber;
        firstNumber = secondNumber;
        secondNumber = variableForSwapFirstAndSecondNumber;
    }
    for(let indexOfArray = 0; indexOfArray < array.length; indexOfArray++){                                  
        for (let NumberBetweenFirstAndSecond = firstNumber; NumberBetweenFirstAndSecond <= secondNumber;NumberBetweenFirstAndSecond++){
            if (array[indexOfArray] === NumberBetweenFirstAndSecond){ 
                newArray.push(NumberBetweenFirstAndSecond);
            }
        }        
    }
    return newArray;
}