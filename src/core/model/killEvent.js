class killEvent {
    static killer (pattern) {
        return pattern[1];
    }
    
    static killed(pattern) {
        return pattern[3];
    }
}

export default killEvent