function makeObjectDeepCopy(oldObject) {
    const newObject = {};
    for (const indexOfProperty in oldObject){
        if ((typeof oldObject[indexOfProperty]) === 'object'){
            if (oldObject[indexOfProperty] === null){
                newObject[indexOfProperty] = null;
            }
            else {
                newObject[indexOfProperty] = makeObjectDeepCopy(oldObject[indexOfProperty]);
            }            
        }
        else {
            newObject[indexOfProperty] = oldObject[indexOfProperty];
        }
    }
    return newObject;
}