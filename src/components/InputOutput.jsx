import React from 'react';
import TranslateLogic from './TranslateLogic';

function InputOutput() {


  let styles = {
    group: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '120px',
      alignItems: 'center',
    },
    inputOutputHolder: {
      display: 'flex',
      flexDirection: 'row',
      width: '600px',
      height: '300px',
      borderRadius: '7px',
      boxShadow: '0px 2px 4px 2px rgba(00,00,00,0.18)',
      color: '#3C89AA',
    },
    box: {
      width: '300px',
      padding: '15px',

    },
    heads: {
      width: '220px',
      marginBottom: '10px'
    }
  }

  return (
    <div>
      <div style={styles.group}>
        <img style={styles.heads} src='https://www.dropbox.com/s/zgcgqx4tmsz975t/roughheads.png?dl=1'/>
        <div style={styles.inputOutputHolder}>
          <div style={styles.box}>
          </div>
          <div style={styles.box}>
            <p>{ TranslateLogic() }</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default InputOutput;
