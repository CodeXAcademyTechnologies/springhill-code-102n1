'use strict'
function whileExample() {
  let password = prompt('Enter your new password:');
  while (password.length < 8) {
    alert('your password must be at least 8 characters long');
    password = prompt('Enter your new password');
  }

  alert('Your password has been accepted!');

}

function yourName() {
  let usersName = prompt('What is your name?');
  // make a variable called usersName and set the value of the variable to be the prompt. the prompt is "what is your name" after the user answers the prompt question. the new value of the variable usersName will be equal to the users response i.e. if the user responds with "jimmy" then the variable usersName is now equal to 'jimmy'
  return document.write(usersName);
}
function guessANumber() {
  let answer;

  while (answer != 7) {
    answer = prompt('Guess a number between 1-10');
    if (answer < 7) {
      alert('Try again! maybe higher?');
    } else if (answer == 8) {
      alert('So close! but try again!');
    } else if (answer > 7) {
      alert('Try again! maybe lower?')
    } else {
      alert('Correct!');
    }
  }
}
function timeOfDay() {
  let time = prompt('What hour is it? (0-23)');
  let message = '';

  if (time <= 11) {
    message = 'Good Morning!';
  } else if (time <= 18) {
    message = 'Good Afternoon!';
  } else if (time < 24) {
    message = 'Good Evening!';
  } else {
    message = 'That time does not exist!!!!!'
  }
  return message
}
function showCars() {
  let shownCar = '';
  let usersCar;
  while (usersCar !== 'Toyota' || usersCar !== 'Mitsubishi' || usersCar !== 'Porsche') {
    usersCar = prompt('which brand do you prefer? Toyota, Mitsubishi, or Porsche');
    if (usersCar === 'Toyota') {
      shownCar = "<img class='showCars' src='/class-08/images/ToyotaDemo.jpg'/>"
      break;
    } else if (usersCar === 'Mitsubishi') {
      shownCar = "<img class='showCars' src='https://images.unsplash.com/photo-1611396058741-1d570a4fcf95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'/>"
      break;
    } else if (usersCar === 'Porsche') {
      shownCar = "<img class='showCars' src='https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'/>"
      break;
    } else {
      alert('That was not one of the selections!');
    }
  }
  return document.write(shownCar);
}
function displayRating() {
  let output = '';
  let rating = prompt('scale of 1-5, how many stars?');
  // rating will now become equal to the user response i.e. 3
  //  rating = 3
  for (let i = 0; i < rating; i++) {
    output = output + "<img class='star' src='/class-08/images/star.png' />"
    console.log(output, i);
  }
  // output = ''
  //first iteration: output + "<img class='star' src='/class-08/images/star.png' />"

  // second iteration output + "<img class='star' src='/class-08/images/star.png' />" + "<img class='star' src='/class-08/images/star.png' />"

  // Third iteration output + "<img class='star' src='/class-08/images/star.png' />" + "<img class='star' src='/class-08/images/star.png' />" + "<img class='star' src='/class-08/images/star.png' />"

  // Fourth iteration output + "<img class='star' src='/class-08/images/star.png' />" + "<img class='star' src='/class-08/images/star.png' />" + "<img class='star' src='/class-08/images/star.png' />" + "<img class='star' src='/class-08/images/star.png' />"
  return document.write(output)
}


guessANumber();