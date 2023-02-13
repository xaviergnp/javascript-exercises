const reverseString = function(str) {
    // let rev = "";
    // for(let x= String(str).length-1; x>=0; x--){
    //     rev+=String(str).charAt(x);
    // }
    // return rev;
    return String(str).split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
