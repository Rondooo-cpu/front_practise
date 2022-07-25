class Calculator {
    constructor (number1,number2) {
        if (!isNumberValued(number1) || !isNumberValued(number2)) {
            throw new Error ('Ошибка ввода данных при создании объекта класса!');
          }
            this.number1 = number1;
            this.number2 = number2;
            this.setX = this.setX.bind(this);
            this.setY = this.setY.bind(this);
            this.logSum = this.logSum.bind(this);
            this.logMul = this.logMul.bind(this);
            this.logSub = this.logSub.bind(this);
            this.logDiv = this.logDiv.bind(this);
    }
    setX(newNumber1) {
        if (!isNumberValued(newNumber1)) {
            throw new Error ('Ошибка при вводе нового значения первого числа!');
           }
        this.number1 = newNumber1;
    }
    setY(newNumber2) {
        if (!isNumberValued(newNumber2)) {
            throw new Error ('Ошибка при вводе нового значения второго числа!');
           }
        this.number2 = newNumber2;
    }
    logSum() {
        console.log(this.number1 + this.number2);
    }
    logMul() {
        console.log(this.number1 * this.number2);
    }
    logSub() {
        console.log(this.number1 - this.number2);
    }
    logDiv() {
        if (this.number2===0) {
            throw new Error ('Второе число равно 0!');
        }
        console.log(this.number1 / this.number2);
    }
}
function isNumberValued(testNumber) {
    if (testNumber === undefined || typeof testNumber !== 'number' || isNaN(testNumber) || !isFinite(testNumber)) {
        return false;
    }
    return true;
}
