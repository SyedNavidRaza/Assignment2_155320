var x = parseFloat(prompt('Enter first number: '));
var y = parseFloat(prompt('Enter second number: '));

var operator = prompt('Enter operator ( either +, -, * /& % ): ');
var result;

// using if...else if... else
if (operator == '+') {
    result = x + y;
}
else if (operator == '-') {
    result = x - y;
}
else if (operator == '*') {
    result = x * y;
}
else if (operator == '/'){
    result = x / y;
}
else {
    result = x % y;
}
document.write(`${x} ${operator} ${y} = ${result}`);