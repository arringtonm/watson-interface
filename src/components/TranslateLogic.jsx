import React from 'react';
import { StaticJSON } from './StaticJSON';


function TranslateLogic() {

  let translatedText = StaticJSON.translations[0].translation;
  return(translatedText);

}


export default TranslateLogic;
