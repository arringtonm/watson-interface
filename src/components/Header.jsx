import React from 'react';


function Header() {

  let styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      top: '0px',
      height: '60px',
      width: '100%',
      backgroundColor: '#88C7E2',
      padding: '10px'
    },
    p: {
      fontWeight: '100',
      fontSize: '24px',
      color: 'white'
    }
  }

  return (
    <div style={styles.header}>
      <p style={styles.p}>Michael's IBM Watson Interface</p>
    </div>
  );
}

export default Header;
