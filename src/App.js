
$(document).ready(function() {

  console.log('ready');

  $("#submit").submit(function(event) {
    event.preventDefault();
    translateLogic();

  });

});




translateLogic = function() {

  alert("yo");


  // hard coded test input



  // let pageDomain = 'conversational';
  // // hard coded language style. other options include 'news' and 'patent'
  // let inputLang = 'en';
  // // temporarily hard coded 'from' language.
  // let outputLang = 'es'
  //
  // let model_id = inputLang + '-' + outputLang;
  // let callData = {
  //   model_id: model_id,
  //   text: inputText
  // };
}

let restAPICall = {
  type: 'POST',
  url: '/api/translate',
  // data: callData,
  dataType: 'json',
  headers: {
    'X-WDC-PL-OPT-OUT': '0',
    'X-Watson-Technology-Preview': '2017-07-01'
  },
  async: true
}
