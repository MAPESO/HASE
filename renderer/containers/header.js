import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import Header from '../components/header';

export default class HeaderContainer extends Component {
  constructor() {
    super();
    // bind function methods
    this.handleMaximize = this.handleMaximize.bind(this);
    this.stopInput = this.stopInput.bind(this);
  }
  // This method allows us to maximize
  // the window and return it to its
  // normal size at the same time
  handleMaximize() {
    ipcRenderer.send('maximize-unmaximize');
  }
  // This method will help so that
  // handleMaximize is not activated
  // in the input
  stopInput(event) {
    event.stopPropagation();
  }
  render() {
    return (
      <div>
        <Header handleClick={this.handleMaximize} stopInput={this.stopInput} />
      </div>
    );
  }
}
