import React from 'react';
import { StaticJSON } from './StaticJSON';





function TranslateLogic() {



  // let inputtedText = document.getElementById('input');
  // return(inputtedText);









  let translatedText = StaticJSON.translations[0].translation;
  return(translatedText);


}


export default TranslateLogic;
