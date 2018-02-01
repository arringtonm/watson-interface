# Michael's Design Capstone Project

### Description

This project is an interface for IBM's Watson, which is a Natural Language Processing machine.


### Features

As of January 31st, this project only offers language translation.


### Installation

Clone repository from GitHub, `npm install`, `npm build`, `npm start`. Find web application in your browswer at https://localhost:3000




----


### To-Do:

- Output language
  - Drop down option
  - Auto populate or limit to 'safe' options
- Input Language Control
  - Drop down (easier)
  - Auto detect by default (harder)
- ~~Error handling for zero length inputs~~
- Auto resize text based on character count
- Option for timer adjustment / manually enter
- Add indicator ('...') progress bar somewhere
- Documentation
- Add option to auto copy

    `let copyText = $('#output').val();`

    `copyText.select();`

    `document.execCommand("Copy");`


- Favicon
- Add error catching language and notifications
- Prettyify server start language
- Style dropdown menus (idea: https://codepen.io/afalchi82/pen/aNXjgb)
- Responsive design (vertical full screen box split)
- Find somewhere to incorporate goldenrod or salmon colors
- Refactor into React
- Rename images/etc for cleanliness

### Scrapped To-Do:

- Output text to speech
  - Switch ports and run in parallel?
  - Double up services in same project
