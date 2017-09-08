import React, { Component } from 'react';
import Styles from './App.scss';
import Main from './Main/Main';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
    <div className={Styles.App}>
      <Header/>
      <Main/>
    </div>);
  }
}

export default App;
