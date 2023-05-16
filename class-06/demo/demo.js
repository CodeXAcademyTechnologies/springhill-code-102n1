'use strict';

let username = prompt('Whats is your name');
console.log('Hello' + ' ' + username);

let time = prompt('What hour is it? (0-23)');

let message = 'hello';
let x = 5;
x ** 5;

if (time <= 11) {
  message = 'Good Morning'
} else if (time <= 18) {
  message = 'Good Afternoon'
} else if (time < 24) {
  message = 'Good Evening';
} else {
  message = 'That hour does not exist'
}