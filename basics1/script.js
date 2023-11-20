// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
const kilometerToMeter = (km) => `${km * 1000} meters`;
const kilometerToCentimeter = (km) => `${km * 1000 * 100} centimeters`;
// console.log(kilometerToMeter(23));
// console.log(kilometerToCentimeter(10));

// Question-2:    WAP to input radius of a circle and log the area of circle.
const areaOfCircle = (radius) => Math.PI * radius ** 2;
// console.log(areaOfCircle(7));

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.
const handleArithmeticOperations = (num1, num2) => {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const multiply = num1 * num2;
  const divide = num1 / num2;
  return { sum, difference, multiply, divide };
};
// console.log(handleArithmeticOperations(25, 2));

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.
const calculateTotalMarksAndPercentage = (mark1, mark2) => {
  const totalMarks = mark1 + mark2;
  const percentageMarks = (totalMarks / 200) * 100;
  return { totalMarks, percentageMarks };
};
// console.log(calculateTotalMarksAndPercentage(82, 91));

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const areaAndPerimeterOfRectangle = (length, breadth) => {
  const areaOfRectangle = length * breadth;
  const perimeterOfRectangle = 2 * (length + breadth);
  return { areaOfRectangle, perimeterOfRectangle };
};
// console.log(areaAndPerimeterOfRectangle(20, 50));

// Question-6:    WAP to input n numbers and log the average of those number.
const findAverage = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum / n;
};
// console.log(findAverage(10));

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
const convertDistance = (km) => {
  const distanceInMeters = km * 1000;
  const distanceInFeet = km * 3280.84;
  const distanceInInches = km * 39370.1;
  const distanceInCentimeters = km * 100000;
  return {
    distanceInMeters,
    distanceInFeet,
    distanceInInches,
    distanceInCentimeters,
  };
};
// console.log(convertDistance(40));

// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
const celsiusToFahrenheit = (c) => {
  return (9 / 5) * c + 32;
};
// console.log(celsiusToFahrenheit(5));

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
const calculateAmount = (quantity, price) => {
  const totalPrice = quantity * price;
  const discountedPrice = totalPrice * (10 / 100);
  return totalPrice - discountedPrice;
};
// console.log(calculateAmount(4, 200));

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};
// console.log(calculateSimpleInterest(7000, 7, 5));
