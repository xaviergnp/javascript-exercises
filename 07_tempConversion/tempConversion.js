function roundTwoDecimal(num) {
  return Math.round( ( num + Number.EPSILON ) * 100 ) / 100;
}
const convertToCelsius = function(temp) {
  return roundTwoDecimal((temp-32) * (5/9))
};

const convertToFahrenheit = function(temp) {
  return roundTwoDecimal(temp * (9/5) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
