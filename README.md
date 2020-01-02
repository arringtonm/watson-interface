# Michael's IBM Watson Capstone Design Project

![interface](watsonscreenshot.png)

### Current Status

This project is currently unusuable due to [breaking changes](https://cloud.ibm.com/docs/services/language-translator?topic=language-translator-release-notes#breaking-changes) in IBM's API interface. Updates and revisions to this project are planned (solving this issue in addition to adding To-Do items) 



### Description

This project is an interface for IBM's Watson, which is a Natural Language Processing machine. It was created to satisfy the requirements for the capstone project at Epicodus.


### Features

This project translates text in real time between eight languages. Planned and in-development features are listed below in the To-Do section.


### Installation

Clone repository from GitHub, `npm install`, `npm build`, `npm start`. Find web application in your browswer at https://localhost:3000


### Known Issues

Connecting to IBM's Watson requires a rather detailed authentication process. Due to the authentication challenges and breaking changes to the API, I am currently considering other API options.



### To-Do:

- Update to v3 of IBM Watson API
- Auto detect input language
- Auto populate output language fields
- Add option to translate two directionally
- Option for timer adjustment / manually enter
- Add indicator ('...') progress bar
- Improve documentation (hello!)
- Add favicon
- Prettyify server start language
- Style dropdown menus (idea: https://codepen.io/afalchi82/pen/aNXjgb)
- Add responsive design (vertical full screen box split)
- Find somewhere to incorporate goldenrod or salmon colors
- Refactor into VueJS
- Add language-switch event to retranslate into new language

### "Wishlist To-Do"

- Output text to speech
  - Switch ports and run in parallel?
  - Double up services in same project
- Drag and drop translation


### Author

This project was created by Michael Arrington in early 2018 while finishing up a coding boot-camp (Epicodus in Portland, OR). Michael is currently working as a front-end developer at a boutique FinTech agency. 


### License

This project is distributed with a MIT License. All of IBM's code, including the Express server this project runs on top of, belongs to IBM.
