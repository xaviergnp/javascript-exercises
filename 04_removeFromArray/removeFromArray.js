const removeFromArray = function(arr, delNum) {
    let filteredArray = arr;
    for (args of Array.from(arguments)) {
        filteredArray = filteredArray.filter((num) => num !== args);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
