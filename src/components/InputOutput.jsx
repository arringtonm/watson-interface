import React from 'react';
import TranslateLogic from './TranslateLogic';
// import roughheads from '../assets/images/roughheads.png';
import heads from '../assets/images/headscropped.png';
import arrow from '../assets/images/linkarrow.png';

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
      height: '90%',
      outline: 'none',
    },
    heads: {
      width: '220px',
      marginBottom: '10px'
    },
    arrow: {
      transform: 'translate(5px,-15px)'
    },
    select: {
      fontSize: '12px',
      marginBottom: '20px'
    },
    selectR: {
      fontSize: '12px',
      textAlign: 'right',
      marginBottom: '20px',
    }
  }

  return (
    <div>
      <div style={styles.group}>
        <div style={styles.headholder}>
          <img style={styles.heads} src={heads}/>
          <img style={styles.arrow} src={arrow}/>
        </div>
        <div style={styles.inputOutputHolder}>
          <div style={styles.boxLeft}>
            <div><p style={styles.select}>English<img src={arrow}/></p></div>
            <textarea id='input' style={styles.textarea} placeholder='Enter text'>
            </textarea>
          </div>
          <div style={styles.boxRight}>
            <div><p style={styles.selectR}>English<img src={arrow}/></p></div>
            <p>{ TranslateLogic() }</p>
          </div>
        </div>
      </div>
    </div>
  );


}

export default InputOutput;
// <img style={styles.heads} src='https://www.dropbox.com/s/zgcgqx4tmsz975t/roughheads.png?dl=1'/>
