function hiddenProp(obj, prop, val) {
    return Object.defineProperty(obj, prop, {
        enumerable: false, 
        writable: true, 
        value: val})
}

export {
    hiddenProp
}