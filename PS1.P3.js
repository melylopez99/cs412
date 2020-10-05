// Part 3
// This is the function that takes in a string and decorated function
const problem3 = (str, func) => func(str);

// part 1
let s = 'supercalifragilisticexpialidocious'
part1 = problem3(s, (s) => s.replace(/c/gi,',c').split(','));

// part 2
// Object to store values
function replaceA(originalString, modifiedString, numberReplaced, length) {
    this.originalString = originalString;
    this.modifiedString = modifiedString;
    this.numberReplaced = numberReplaced;
    this.length = length;
}

let part2 = new replaceA(s, problem3(s, (str) => str.replace(/a/gi, 'A')), (s.match(/a/g) || []).length, s.length);
console.table(part2);

module.exports = {problem3};
