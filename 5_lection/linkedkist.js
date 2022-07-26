class LinkedListObject {
    constructor(elementValue) {
        this.value = elementValue;
        this.nextElementLink = null;
        this.previousElementLink = null;
    }
}
class LinkedList {
    constructor() {
          this.firstElement = null;
          this.sizeOfLinkedList = 0;
    }
    append(elem) {
        const newLinkedListObject = new LinkedListObject(elem);
        if (this.sizeOfLinkedList === 0) {
            this.firstElement = newLinkedListObject;
        }
        else {
            let currentElement = this.firstElement;
            while(currentElement.nextElementLink) {
                currentElement = currentElement.nextElementLink;
            }
            currentElement.nextElementLink = newLinkedListObject;
            newLinkedListObject.previousElementLink = currentElement;
        }
        this.sizeOfLinkedList++;
    }
    prepend(elem) {
        const newLinkedListObject = new LinkedListObject(elem);
        if (this.sizeOfLinkedList === 0) {
            this.firstElement = newLinkedListObject;
        }
        else {
            let currentElement = this.firstElement;
            currentElement.previousElementLink = newLinkedListObject;
            newLinkedListObject.nextElementLink = currentElement;
            this.firstElement = newLinkedListObject;
        }
        this.sizeOfLinkedList++;
    }
    find (elem) {
        let currentElement = this.firstElement;
        while (currentElement) {
            if (currentElement.value === elem) {
                return currentElement;
            }
            currentElement = currentElement.nextElementLink;
        }
        return null; 
    }
    toArray() {
        const newArray = [];
        let currentElement = this.firstElement;
        while (currentElement) {
            newArray.push(currentElement.value);
            currentElement = currentElement.nextElementLink;
        }
        return newArray;
    }
    static fromIterable(iterableToLinkedList) {
        if (!isIterable(iterableToLinkedList)) {
            throw new Error('Переданный объект не является итерируемым');
        }
        const iterableLinkedList = new LinkedList();
        iterableLinkedList.firstElement = new LinkedListObject(iterableToLinkedList[0]);//записали первй элемент
        iterableLinkedList.sizeOfLinkedList = 1;//указали увеличение колва объектов в ЛЛ
        for (let iterator = 1; iterator < iterableToLinkedList.length; iterator++) {
            const newLListObj = new LinkedListObject(iterableToLinkedList[iterator]);
            let currentElement = iterableLinkedList.firstElement;
            while(currentElement.nextElementLink) {
                currentElement = currentElement.nextElementLink;
            }
            currentElement.nextElementLink =  newLListObj;
            newLListObj.previousElementLink = currentElement;
            iterableLinkedList.sizeOfLinkedList++;
        }
        return iterableLinkedList;
        }
}
function isIterable(testObject) {
    if (testObject != null && typeof testObject[Symbol.iterator] === 'function' ) {
        return true;
    }
    return false;
}