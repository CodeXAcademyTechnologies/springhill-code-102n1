# Programming with JavaScript

## Learning Objectives

- Students will be able to create a script as a sequence of steps, executable by the computer, to achieve a stated goal.
- Students will encapsulate code in functions, modeling steps in a process.
- Students will apply new techniques to existing code, increasing code clarity, without losing any functionality.

## Class Agenda

- Review of previous class
  - Share your learning
- Programming - Input/Process/Output
  - Robot Exercise
  - Discussion Reading
- Demo With JavaScript Functions
  - Lab: Refactoring

## New Vocabulary

- Script
- Programmatic problem solving
- Expression
- Operator
- Function
  - Declaration
  - Call
  - Parameters
  - Arguments
  - Return value
- Refactoring

## Discussion

### how is programming like a recipe

1. you have certain steps to follow.

2. you have ingredients or user inputs you need to make your cake(program)

3. based on how you follow the steps and the ingredients you will either a result that you wanted to get or if you dont follow them you dont get the result that you wanted.

## Reading

operators: there are many types of operators and they do a lot of different things from math to comparing different values. Used to manipulate your variables or data.

What is `control flow`?

to make sure that your code is in order. In regards to your statements and steps of operation.

What is a JavaScript `function`?

a block of code designed to perform a particular task

What does it mean to `invoke` - or call - a function?

when an event occurs during a process or invoked automatically. `myFunction();`

What are the parenthesis `()` for when you define a function?

```js
let userResponse = prompt('what is your age');
function getAge(age) {
  if (age <= 21) {
    console.log('you can not drink');
  }
}

getAge(userResponse);
```
