const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, index) => total + index, 0);
};

const multiply = function(array) {
  return array.reduce((total, index) => total * index, 1);
};

const power = function(base, exponent) {
	let output = 1;
  for (let i = 1; i <= exponent; i++) {
    output = output * base;
  }
  return output;
};

const factorial = function(input) {
	let output = 1;
  for (let i = input; i > 0; i--) {
    output = output * i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
