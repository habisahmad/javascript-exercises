const repeatString = function() {
    let a = 'hey'
    for(let i = 0; i < 3; i++){
        let c = a + a + a
        if(i == 2){
            return c
        }
    }
    
};

// Do not edit below this line
module.exports = repeatString;
