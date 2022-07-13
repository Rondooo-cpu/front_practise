const myIterable = { from: 1,
    to: 4,
    [Symbol.iterator] () {
        const values = Object.values(this);
        const startNumber = values[0];
        const endNumber = values[1];
        let indexOfNumber = startNumber - 1;
        if (startNumber > endNumber){
            throw new Error ('Стартовое число больше конечного');
        }
        if ((endNumber === undefined)||(typeof startNumber !== 'number' || typeof endNumber !== 'number'))
        {
            throw new Error ('Ошибка в значениях границ');
        }
            return {
                next() {
                    indexOfNumber++;
                    return {
                        value: indexOfNumber,
                        done: indexOfNumber > endNumber,
                    }
                }
            }
    }
};