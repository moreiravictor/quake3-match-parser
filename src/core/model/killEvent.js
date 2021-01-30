class killEvent {
    static killer = (match) => {
        return match[1];
    }
    
    static killed = (match) => {
        return match[3];
    }
}

export default killEvent