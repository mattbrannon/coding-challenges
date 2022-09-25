# Password Generator

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh).

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

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Additional Features

- Hide or show the password on the screen
- Toggle between displaying the standard strength rating or the bits of entropy for the given password

### Screenshot

![screen shot](../images/screenshot3.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Try it live](https://mattbrannon-password-generator.vercel.app/)

## My process

This app came with a figma design that was super helpful. One of the first things I do is look at the colors and typography used in the design and create some easy to remember css variables. With those in place, I start going through the design layer by layer and mocking out a basic skeleton of the app. The goal at this point is to simply get the structure of the app laid out with semantically meaningful html elements. Once I feel happy with the overall structure, I begin working on the individual components.

When building out components, I usually create a dedicated `components` folder with sub folders for each component. I've found that doing it this way allows me to separate various parts of a component into another file if needed while still having everything grouped together in one shared folder. For example, in this project, the `Meter` component is structured like this:

```bash
- components
  - Meter
    - index.js
    - styles.js
    - Blocks.js
    - Meter.js
  - RangeSlider
  ...
```

I tend to make a separate file for

I usually put everything in one file to start with.

As that file grows larger, it's usually pretty obvious what needs to be seperated into another file.

And when it's not so obvious, that's usually a pretty good indication that I need to take a step back for a minute and think a bit more about what I'm actually trying to accomplish.

I tend to separate components based on their role.

If a component is used for styling or layout without much if any logic handling, they usually go into a separate file eventually.

Not a hard and fast rule by any means as there many situations where it's not so simple making that distinction.

I've just found that this works well for me.

As each component is built and added to the application, I try to spot any bugs in that component and fix them before moving on. It's much easier for me to fix a bug when my brain is focused on that individual part of the app. If I simply make a note to fix it later, it's probably going to take longer and be more frustrating overall.

After all the pieces have come together and everything seems to work as it should, I start trying to break it. I check for accessibility issues by tabbing through the page with a screen reader. The screen reader is helpful in finding any elements with missing lablels or aria states. Click everything, drag everything, resize the viewport, zoom out, zoom in... anything I can do that another person might do. Once I feel it's not easily broken, I run it through `lighthouse` on chrome and fix anything reported back to me.

### Built with

- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)

### What I learned

After starting this project, I spent a good amount of time researching cryptography and hashing. What makes a good password, what makes a bad password, complexity vs length, etc.. While I'm by no means an expert one of the main things I learned - it's all about **entropy**.

What is entropy? The short answer is, in the context of crytography, _entropy is the measure of uncertainty of randomness_. A password with a high entropy is said to be more secure than one with low entropy. That is assuming we're talking about random character passwords and not human created ones. When humans create passwords, it becomes a lot more complicated.

Entropy itself is rooted in thermodynamics. I can't pretend to understand most of it. I'll leave a link below so you can read about yourself.

Luckily during my research I found a couple articles on _calulating_ entropy. To determine the entropy (in bits) of a string of characters, you first need to determine the amount of possible characters. For example if a password contains only numbers, then the amount of possible characters is 10. If it contains lowercase letters then add 26. Uppercase - add another 26. Symbols - varies per implementation but let's say 33.

33 + 26 + 26 + 10

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Etropy](https://en.wikipedia.org/wiki/Entropy)
  - [Computing](<https://en.wikipedia.org/wiki/Entropy_(computing)>)
  - [Information Theory](<https://en.wikipedia.org/wiki/Entropy_(information_theory)>)
- [Auth0 Blog](https://auth0.com/blog/defending-against-password-cracking-understanding-the-math/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
- [Professor of cryptography](https://billatnapier.medium.com/the-wonderful-world-of-hashing-some-biba-entropy-calculations-and-virtually-every-hashing-7aa6ce293109) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Website - [Matt Brannon](https://www.mattbrannon.dev)
- Frontend Mentor - [@ghostrib](https://www.frontendmentor.io/profile/ghostrib)
- Twitter - [@\_mattbrannon](https://www.twitter.com/_mattbrannon)
