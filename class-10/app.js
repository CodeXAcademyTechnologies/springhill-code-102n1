function myFunc() {
  console.log('hello world');
}
myFunc();


function aNewUser(arr) {
  for (let i = 0; i <= arr.length - 1; i = i + 1) {
    document.write(arr[i] + ' ');
  }
  document.write('Hello there ' + arr[-1]);
}
let userNames = ['Jon', 'John', 'Chyna', 'Constance', 'Eric', 'C.J.', 'Shauntel']
  ;
function whileLoop() {

  let i = 1;
  while (i < 12) {
    i = i * 2
    console.log(i);
  }
}
whileLoop();
function parameterExample(a) {
  console.log(a)
}
let usersResponse = prompt('what is your favorite color?');
parameterExample(usersResponse);
