# Class 5 Lecture notes

## CSS and the what, why, and how

### student input -

1. What?

- specifies how a website is layed out and presented to the user based on tags that the developer uses

- helps you create the look and feel of your website. and changes how it is presented to the public.

- similar to html whereas it is used for formatting the webpage.

- Cascading Style Sheets.

- a language that allows you to make great looking pages.

can be implemented with HTML or used with a separate CSS file

2. Why?

- without css websites would look bland and lifeless.

- Makes the webpage more usable for the intended audience.

- gives you the opportunity to have flare and beautification of the web pages.

3. How?

used in conjunction with HTML. using CSS syntax to give HTML elements properties and styling.

external style sheets. link the sheets to the HTML sheet. inline.

## Lecture

What: CSS(Cascading style sheets) is a styling language used in conjunction with other languages to provide styling whether inline or externally to elements on a webpage.

Why: a developer would css because the bare bones webpage from HTML has no life to it. and can sometimes be confusing.

How:
**inline styling** = `<p style= "color: green"></p>`

`<h1 style = "font-size: 10px; color: red; margin: 0"> <h1>`

`<h1 id= 'header'></h1>`
`<h2 id= 'header'Two class='image'></h2>`
`<img class='image'/>`
`<img class='image'/>`
`<img class='image'/>`

**internal**:

````html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Cookie Shop</title>
  <style>
    p {
      color: black;
      border: red solid 1px;
    }
  </style>
</head>
''' __external__: ```css p { color: red; background-color: black; }
````

_class = "."_
_id = "#"_`.image`
`#header`

## Reflection and Discussion

Below is a collection of resources of varying types and lengths which describe the topics for the upcoming lecture.

Go through these resources, and **add a new page to your reading-notes web site** that summarizes the topics you learned as though you were presenting the material to a non-technical friend interested in learning about it.

<strong style="color: green">Reminder:</strong> _all your reading-notes assignments should be done locally, in VS Code. New files and changes will reflect in GitHub using your new Git-flow skills! (Remember... A-C-P)_

## Read

- [What is CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS){:target="\_blank"}

## Read and Experiment

- [How to Add CSS](https://www.w3schools.com/css/css_howto.asp){:target="\_blank"}
- [CSS Color](https://www.w3schools.com/cssref/pr_text_color.asp){:target="\_blank"}

## Skim

- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference){:target="\_blank"}
- [Myers Web Reset Stylesheet](https://meyerweb.com/eric/tools/css/reset/){:target="\_blank"}

## Answer

1. What is the purpose of CSS?
2. What are the three ways to insert CSS into your project?
3. Write an example of a CSS rule that would give all `<p>` elements red text.

## Submission Instructions

- Share what you've learned by **copying and pasting the full text of your new rendered web page** into the 'Reply' below.
- Include the live URL of the new page below your pasted text. (_Hint: The URL of the page should begin with YOUR GitHub username, not "github.com"_)

You are invited to check out your classmates' replies and give positive feedback and words of encouragement.
