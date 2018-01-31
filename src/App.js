
$(document).ready(function() {

  console.log('ready');

  let timer = '';
  let input = '';


  $("#input").keyup(function() {
    input = $("#input").val();
    clearTimeout(timer);
    timer = setTimeout(translator, 500, input);
  });
});




let dummy = function(input) {
    $("#output").text('');
    $("#output").text(input);
}


let translator = function(input) {

  // input as parameter

  let pageDomain = 'conversational';
  let inputLang = 'en';
  let outputLang = 'es'
  // hard coded language style. other options include 'news' and 'patent'
  // temporarily hard coded 'from' language.

  let model_id = inputLang + '-' + outputLang;
  let callData = {
    model_id: model_id,
    text: input
  };


  let restAPICall = {
    type: 'GET',
    url: 'https://gateway.watsonplatform.net/language-translator/api/',
    data: callData,
    dataType: 'json',
    headers: {
      'X-Watson-Learning-Opt-Out': 'false',
      
     },
    async: true
  }

  $.ajax(restAPICall)
    .done(function (data) {
      $("#output").text(data['translations'][0]['translation'])
    })
    .fail(function (jqXHR, statustext, errorthrown) {
      console.log(statustext + errorthrown);
    });


}
