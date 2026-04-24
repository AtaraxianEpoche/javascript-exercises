const removeFromArray = function(array) {
    //Outer for loop to cycle between non-array arguments
        //Inner loop to cycle between array elements
            //If element === argument
                //Splice element
                //Deincrement counter to adjust for index position
    //Return array
    
    console.log("Total arguments: " + arguments.length);

    for (let i = arguments.length - 1; i > 0; i--) {
        for (let j = 0; j < array.length; j++) {
            console.log("Current element: " + array[j]);
            console.log("Current argument: " + arguments[i]);
            if (array[j] === arguments[i]) {
                console.log("Removed: " + array.splice(j, 1));
                j--
        }   }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
