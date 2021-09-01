# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Mobile](/images/tip_calculator_mobile.png)
![Desktop](/images/tip_calculator_desktop.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/tip-calculator-with-vanilla-js-GdpUC3rL_]
- Live Site URL: [https://marcosfsousa.github.io/tip_calculator/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This snippet of JS paired with an event listener on the parent element that encloses the tip buttons made it possible for the whole app to work. I was at a crossroads to figure out how the app would work in an efficient and simple way when I found a YT tutorial for capturing multiple elements with one event listener. 

```js
function handleEvent(event) {
    
    if (event.target !== event.currentTarget) {
        let clickedEvent = event.target.value;
        //Code goes here
    }
     event.stopPropagation();
}
```
### Continued development

Javascript continus to be the most challenging of the all the aspects of Front End Development, for me personally, given the scope of what it allows for a developer to make possible with a few ingenious lines of code. I will try and remain ever curious to acquire more tools for my toolbag. 

### Useful resources

- [Handling events for multiple elements](https://www.youtube.com/watch?v=Xwq1Hj1DyDM) - This helped me for the aforementioned reason. I liked the simplicity to what seemed a daunting task at the start.


## Author

- Web CV - [Marcos Sousa](https://marcosfsousa.github.io/WebCV/)
- Frontend Mentor - [@marcosfsousa](https://www.frontendmentor.io/profile/marcosfsousa)
- LinkedIn - [themarcossousa](https://www.linkedin.com/in/themarcossousa/)

