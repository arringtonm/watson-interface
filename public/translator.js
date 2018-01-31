
$(document).ready(function() {

  let timer = '';
  let input = '';

  $('#input').keyup(function() {
    input = $('#input').val();
    clearTimeout(timer);
    timer = setTimeout(translator, 250, input);
  });
});


// let dummy = function(input) {
//     $('#output').text('');
//     $('#output').text(input);
// }


// to do:
// add in middle function that checks length of input area, cleans output area
// add auto language detection 






let translator = function(input) {

  let pageDomain = 'conversational';
  let inputLang = 'en';
  let outputLang = 'es'
  let model_id = inputLang + '-' + outputLang;
  let callData = {
    model_id: model_id,
    text: input
  };

  let restAPICall = {
    type: 'POST',
    url: '/api/translate',
    data: callData,
    dataType: 'json',
    headers: { },
      async: true
    }

    $.ajax(restAPICall)
    .done(function (data) {
      $('#output').text(data['translations'][0]['translation'])
    })
    .fail(function (jqXHR, statustext, errorthrown) {
      console.log(statustext + errorthrown);
    });

}
