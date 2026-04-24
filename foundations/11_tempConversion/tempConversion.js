const convertToCelsius = function(fahrenheit) {
  //F to C = (F - 32) * (5/9)
  
  const Celsius = (fahrenheit - 32) * (5 / 9);
  return parseFloat(Celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  //C to F = C * (9/5) + 32

  const Fahrenheit = celsius * (9/5) + 32;
  return parseFloat(Fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
