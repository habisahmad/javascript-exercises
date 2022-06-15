const sumAll = function() {
    let x = 1
    let y = 4
    let yans = y 
    let xans = x
    x = x + y
    for(let i = xans; i < yans; i++){
        y = y - 1
        x = x + y
    }
    return x - 1
    
};

// Do not edit below this line
module.exports = sumAll;
