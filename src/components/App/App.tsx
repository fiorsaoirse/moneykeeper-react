import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default class App extends Component {
  public render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
