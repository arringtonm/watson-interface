

$(document).ready(function() {
  $('textarea').addClass('size300');
  let timer = '';
  let input = '';
  $('#input').keyup(function() {
    input = $('#input').val();
    clearTimeout(timer);

// Value for delay between translation updates (in milliseconds)

    timer = setTimeout(inputCheck, 100, input);
  });
});


// Checks character count of input and adjusts size of text to be a better fit

let inputCheck = function(input) {
  if (input.length <= 10) {
    $('textarea').removeClass('size200');
    $('textarea').addClass('size300');
  } else if (input.length >= 11 && input.length <= 30) {
    $('textarea').removeClass('size300');
    $('textarea').addClass('size200');
  } else if (input.length >= 31 && input.length <= 60) {
    $('textarea').removeClass('size200');
    $('textarea').addClass('size150');
  } else if (input.length >= 61) {
    $('textarea').removeClass('size150');
    $('textarea').addClass('size100');
  }
  if (input.length === 0) {
    $('#output').text('');
    $('textarea').addClass('size300');
  } else translator(input);
}


// Copies output text to clipboard and displays success icon

let copyOutput = function() {
  let copyText = document.querySelector('#output');
  copyText.select();
  document.execCommand('copy');
  $('#clipboard').addClass('hidden');
  $('#success').removeClass('hidden')
  setTimeout(swapIcons, 1000);
}

let swapIcons = function() {
  $('#clipboard').removeClass('hidden');
  $('#success').addClass('hidden');
}


// Translation API lookup

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
