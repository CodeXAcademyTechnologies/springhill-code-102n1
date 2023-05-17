'use strict'

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