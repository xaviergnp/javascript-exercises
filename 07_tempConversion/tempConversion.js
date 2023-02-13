function roundOneDecimal(num) {
  return Math.round( ( num + Number.EPSILON ) * 10 ) / 10;
}
const convertToCelsius = function(temp) {
  return roundOneDecimal((temp-32) * (5/9))
};

const convertToFahrenheit = function(temp) {
  return roundOneDecimal(temp * (9/5) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
