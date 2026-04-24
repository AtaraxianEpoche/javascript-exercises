const sumAll = function(a, b) {
    //Input validation
    if (a % 1 !== 0 || b % 1 !== 0) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (typeof a !== "number" || typeof b !== "number") return 'ERROR';
    //Sort a and b by least to greatest
    let x;
    let y;
    if (a < b) {
         x = a;
         y = b;
    } else {
        x = b;
        y = a;
    }
    //Loop and add values from a to b
    let sum = 0;
    for (let i = x; i <= y; i++) {
        console.log("Plus " + i);
        sum = sum + i;
        console.log("Equals " + sum);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
