const reverseString = function() {
    let a = "hello"
    let array = []
    for(let i = 0; i < a.length; i++){
        array[i] = a.charAt(i);
    }
    arrayReverse = []
    for(let i = 0; i < a.length; i++){
        arrayReverse[i] = array.pop()
    }

    return arrayReverse.join("")
}

// Do not edit below this line
module.exports = reverseString;
