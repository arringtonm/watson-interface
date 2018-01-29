import React from 'react';
import TranslateLogic from './TranslateLogic';
import roughheads from '../assets/images/roughheads.png';

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
    boxLeft: {
      width: '300px',
      padding: '15px',
      borderRight: '1px solid #DDD'
    },
    boxRight: {
      width: '300px',
      padding: '15px',
    },
    textarea: {
      border: 'none',
      fontFamily: 'sans-serif',
      fontWeight: '200',
      fontSize: '16px',
      color: '#3C89AA',
      resize: 'none',
      width: '100%',
      height: '100%',
      outline: 'none',
    },
    heads: {
      width: '220px',
      marginBottom: '10px'
    }
  }

  return (
    <div>
      <div style={styles.group}>
        <img style={styles.heads} src={roughheads}/>
        <div style={styles.inputOutputHolder}>
          <div style={styles.boxLeft}>
            <textarea style={styles.textarea}>
            </textarea>
          </div>
          <div style={styles.boxRight}>
            <p>{ TranslateLogic() }</p>
          </div>
        </div>
      </div>
      <style jsx>{`
          textarea:active {
            outline: 'none',
            color: 'red'
          }

          `}
      </style>
    </div>


  );


}

export default InputOutput;
// <img style={styles.heads} src='https://www.dropbox.com/s/zgcgqx4tmsz975t/roughheads.png?dl=1'/>
