// Code your solution here
let findMatching = (array, name) => {
    let response = array.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return response !== undefined ? response : undefined;
}

const fuzzyMatch = (array, letters) => {
    
    let response = array.filter(driver => driver.startsWith(letters))
    return response !== undefined ? response : undefined;
}

const matchName = (array, name) => {
    let response = array.filter(driver => driver.name === name);
    return response !== undefined ? response : undefined;
}
