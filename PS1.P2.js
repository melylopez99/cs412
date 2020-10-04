// Part 2

const evaluate = expr => {
    let num1 = parseInt(expr.charAt(0));
    let operator = expr.charAt(1);
    let num2 = parseInt(expr.charAt(2));

    const add = () => num1 + num2;
    const sub = () => num1 - num2;
    const multiply = () => num1 * num2;
    const divide = () => num1 / num2;
    const expo = () => num1 ** num2;

    if (operator === '+') {
        return add;
    } else if (operator === '-') {
        return sub;
    } else if (operator === '*') {
        return multiply;
    } else if (operator === '/') {
        return divide;
    } else if (operator === '^') {
        return expo;
    }
}

module.exports = {evaluate};