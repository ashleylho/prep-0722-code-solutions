// add two numbers
function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

// hours to minutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

// greeting
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting', greeting);

// multiply by 5
function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log('product', product);

// divide by 5
function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var quotient = multiplyAndDivideBy5(35, 10);
console.log('quotient', quotient);

// subtract 2 numbers
function subtractTwoNumbers(x, y) {
  return x - y;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference', difference);

// circumference
function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

// full name
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('full name:', fullName);

// cube
function cube(x) {
  return Math.pow(x, 3);
}

var cubevalue = cube(5);
console.log('cube', cubevalue);
