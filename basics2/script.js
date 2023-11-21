// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."
const checkGreaterThanTen = (num) => {
  if (num > 10) {
    console.log(`${num} is greater than 10`);
  } else {
    console.log(`${num} is not greater than 10`);
  }
};

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).
const eligibleToDrive = (age) => {
  if (age >= 18) {
    console.log(`${age} is eligible to drive`);
  } else {
    console.log(`${age} is not eligible to drive`);
  }
};

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const calculateGrade = (score) => {
  if (90 <= score && score <= 100) {
    return "A";
  } else if (80 <= score && score < 90) {
    return "B";
  } else if (70 <= score && score < 80) {
    return "C";
  } else if (60 <= score && score < 70) {
    return "D";
  } else if (0 <= score && score < 60) {
    return "F";
  } else {
    return "Invalid score";
  }
};

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
const greet = (hour) => {
  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 24) {
    return "Good Night";
  } else {
    return "Invalid time";
  }
};

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
const displayDayOfWeek = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid date";
  }
};

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
const displayMonth = (month) => {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid Month";
  }
};

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
const determineFruit = (x) => {
  switch (x) {
    case "a":
      return "Apple";
    case "b":
      return "Banana";
    case "c":
      return "Cucumber";
    default:
      return "Invalid variable";
  }
};

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.
const temperatureIntensity = (temp) => {
  if (temp < 20) {
    return "Low";
  } else if (temp < 32) {
    return "Medium";
  } else {
    return "High";
  }
};

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.
const classifyNumber = (num) => {
  if (num > 0 && num % 2 === 0) {
    return "Positive and Even";
  } else if (num > 0 && num % 2 !== 0) {
    return "Positive and Odd";
  } else if (num < 0 && num % 2 === 0) {
    return "Negative and Even";
  } else if (num < 0 && num % 2 !== 0) {
    return "Negative and Odd";
  } else {
    return "Zero";
  }
};

// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."
const validateUsername = (username) => {
  if (username.length <= 6) {
    return "Username too short";
  } else if (username.length >= 15) {
    return "User too long";
  } else {
    return "Username accepted";
  }
};
