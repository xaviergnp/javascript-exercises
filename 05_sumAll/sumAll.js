const sumAll = function(numStart,numEnd) {
    if (Number.isInteger(numStart) && Number.isInteger(numEnd) && numStart >=0 && numEnd >=0) {
        if (numStart>numEnd) {
            let tmp = numStart;
            numStart=numEnd;
            numEnd=tmp;
        }
        let sum=0;
        for(let x =numStart; x<=numEnd; x++) sum+=x;
        return sum;
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
