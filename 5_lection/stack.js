class Stack {
    constructor(maxCountStackElements) {
        if (arguments.length === 0) {
            this.maxCountStackElements = 10;
            this.push = this.push.bind(this);
            this.pop = this.pop.bind(this);
            this.peek = this.peek.bind(this);
            this.isEmpty = this.isEmpty.bind(this);
            this.toArray = this.toArray.bind(this);
            this.fromIterable = this.fromIterable.bind(this);
        }
        else if (!isNumberValued(maxCountStackElements)) {
            throw new Error ('В качестве максимального количества элементов стека передано не валидное число');
          }
          else {
            this.maxCountStackElements = maxCountStackElements;
          }
          this.stack = [];
    }
    push(elem) {
        if (this.stack.length === this.maxCountStackElements) {
            throw new Error ('В стеке закончилось место');
        }
        this.stack[this.stack.length] = elem;
    }
    pop() {
        if (this.stack.length === 0) {
            throw new Error ('Стек пуст');
        }
        const lastElement = this.stack[this.stack.length - 1];
        this.stack.length = this.stack.length - 1;
        return lastElement;
    }
    peek() {
        if (this.stack.length === 0) {
            return null;
        }
        const topElement = this.stack[this.stack.length - 1];
        return topElement;
    }
    isEmpty() {
        if (this.stack.length === 0) {
            return true;
        }
        return false;
    }
    toArray() { 
        const stackCopy = this.stack;
        const newArray = [];
        while (stackCopy.length > 0) {
            newArray.unshift(stackCopy.pop());
        }
        return newArray;
    }
    static fromIterable(iterableToStack) {
        if (!isIterable(iterableToStack)) {
            throw new Error('Переданный объект не является итерируемым');
        }
        const iterableStack = new Stack(iterableToStack.length);
        for (let iterator = 0; iterator < iterableToStack.length; iterator++) {
            iterableStack.push(iterableToStack[iterator]);
        }
        return iterableStack;
        }
}
function isNumberValued(testNumber) {
    if (typeof testNumber !== 'number' || isNaN(testNumber) || !isFinite(testNumber)) {
        return false;
    }
    return true;
}
function isIterable(testObject) {
    if (testObject != null && typeof testObject[Symbol.iterator] === 'function' ) {
        return true;
    }
    return false;
}

