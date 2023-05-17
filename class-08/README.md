# Class 8 Lecture notes

## Reflection and Discussion

Below is a collection of resources of varying types and lengths which describe the topics for the upcoming lecture.

Go through these resources, and **create a page in your reading-notes repo** that summarizes the topics you learned as though you were presenting the material to a non-technical friend interested in learning about it.

<strong style="color: green">Reminder:</strong> _all your reading-notes assignments should be done locally, in VS Code. New files and changes will reflect in GitHub using your new Git-flow skills! (Remember... A-C-P)_

## Read

- [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators){:target="\_blank"}
  - Focus only on `Comparison operators` and `Assignment operators`.
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration){:target="\_blank"}
  - Focus only on `for statement` and `while statement` loops.

## Answer

### Student Answer

1. What is an `expression` in JavaScript?

- A valid unit of code that resolves a value.

- Two different types of expressions: expressions that have side effects. and those that are purely evaluate.

- used for problem solving. to get an answer or value for a problem.

2. Why would we use a loop in our code?

- allows you to do an action quick and easy repeatedly.

3. When does a `for` loop stop executing?

- when the specified condition is equal to false during the loop

4. How many times will a `while` loop execute?

- A while loop will continue to run as long as the specified condition is equal to true.

## Lecture

1. What is an `expression` in JavaScript?

an expression is a block of code that evaluates a value.

```js
// left hand expression
i = 10;
total = 0;

// Primary expression

23;
'Hello world';
true;
sum;
this;

// Logical expression

10 > 9 = true

10 < 20 = true
```

2. Why would we use a loop in our code?

- maybe a user is inputting a wrong password.

```js
while (userResponse !== 'red') {
  prompt('what is my favorite color');
}
```

3. When does a `for` loop stop executing?

- a for loop will stop executing when the iterator variable reaches a specified number.

4. How many times will a `while` loop execute?

a while loop will run as many times as necessary until the specified condition is false;
