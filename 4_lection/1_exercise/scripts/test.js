function concatStrings (firstStringValue, separatorValue) {
    if (typeof firstStringValue !== 'string') {
        return '';
    }
    let stringAfterConcat = firstStringValue;
    const separatorValue1 = separatorValue;
    function concatInside (stringValue1) {
            if (typeof stringValue1 === 'string') {
                if (typeof separatorValue1 === 'string') {
                    stringAfterConcat += separatorValue1;
                }
            stringAfterConcat += stringValue1;
            return concatInside;
        }
        return stringAfterConcat;
    }
    return concatInside;
}
