'use strict'

function yourName() {
  let usersName = prompt('What is your name?');
  // make a variable called usersName and set the value of the variable to be the prompt. the prompt is "what is your name" after the user answers the prompt question. the new value of the variable usersName will be equal to the users response i.e. if the user responds with "jimmy" then the variable usersName is now equal to 'jimmy'
  return document.write(usersName);
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