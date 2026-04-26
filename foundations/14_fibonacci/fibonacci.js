const fibonacci = function(member) {
    if (member < 0) return "OOPS";
    let container = [0, 1,];
    for (i = 2; i <= member; i++) {
        container.push(container[i - 2] + container[i - 1]); 
    }
    console.log(container);
    return container[member];

};

// Do not edit below this line
module.exports = fibonacci;
