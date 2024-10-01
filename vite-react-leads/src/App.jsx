import './App.css'
import React from 'react';
import Header from './components/Header';
import Main from './components/MainDiv';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }

}

export default App;