function createDebounceFunction (callBackFunction, delayTimeMS) {  
    let timerID;
    return function () {
        clearTimeout(timerID);
        timerID = setTimeout(callBackFunction, delayTimeMS);
    }
}