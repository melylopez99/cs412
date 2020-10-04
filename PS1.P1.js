// function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in reverse alphabetical order.
const reverse = string => string.split('').sort().reverse().join('');
module.exports = {reverse};

