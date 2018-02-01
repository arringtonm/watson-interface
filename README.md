# Michael's Design Capstone Project

### Description

This project is an interface for IBM's Watson, which is a Natural Language Processing machine.


### Features

As of January 31st, this project only offers language translation.


### Installation

Clone repository from GitHub, `npm install`, `npm start`. Find web application in your browswer at `https://localhost:3000`


### Uses of State

My working assumption is that state will at the App.jsx level as everything immediately below it will need props; this may change when I implement routing and active link titles. I'm still wrapping my head around React and may not know until refactoring during next week.  



----


### To-Do:

- Input Language Control
  - Drop down (easier)
  - Auto detect by default (harder)
- Auto resize text based on character count
- Add indicator ('...') progress bar somewhere
- Add option to auto copy

    `var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");`

- Output language
  - Drop down option
  - Auto populate or limit to 'safe' options 
- Output text to speech?
- Documentation
- Favicon
- Error handling for text input
- Option for timer adjustment / manually enter
- Responsive design (vertical full screen box split)
- Find somewhere to incorporate goldenrod or salmon colors
