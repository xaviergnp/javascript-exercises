const removeFromArray = function(arr, ...delNum) {
    // let filteredArray = arr;
    // for (args of Array.from(arguments)) {
    //     filteredArray = filteredArray.filter((num) => num !== args);
    // }
    // return filteredArray;
    return arr.filter(num => !delNum.includes(num) );
};

// Do not edit below this line
module.exports = removeFromArray;
