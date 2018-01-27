import React from 'react';
import Header from './Header';
import InputOutput from './InputOutput';

function App(){

  let styles = {
    padding: '0px',
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    fontWeight: '200'
  };

  return (
    <div style={styles}>
      <Header/>
      <InputOutput/>
    </div>
  );
}

export default App;
