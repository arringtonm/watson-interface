
$(document).ready(function() {

  let timer = '';
  let input = '';

  $('#input').keyup(function() {
    input = $('#input').val();
    clearTimeout(timer);
    timer = setTimeout(inputCheck, 250, input);
  });
});



let inputCheck = function(input) {
  if (input.length === 0) {
    $('#output').text('');
  } else translator(input);
}


let translator = function(input) {

  let pageDomain = 'conversational';
  let inputLang = $('#inputSelect').val();
  let outputLang = $('#outputSelect').val();
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
    .fail(function (jqXHR, status, error) {
      console.log(status + error);
    });

}
