import './App.css'
import React from 'react';
import Header from './components/Header';
import Main from './components/MainDiv';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main leads={this.props.leads} />
        <Footer />
      </>
    );
  }

}

export default App;