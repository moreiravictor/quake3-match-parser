import fs from 'fs'

const getFileLines = (filepath, encoding = 'utf8') => {
    const data = fs.readFileSync(filepath, encoding)
    return data.split('\n');
}

export {
    getFileLines,
}