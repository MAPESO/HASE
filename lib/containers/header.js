import React, {Component} from 'react';
import {ipcRenderer} from 'electron';
import Header from '../components/header';

export default class HeaderContainer extends Component {
  constructor() {
    super();
    this.handleMaximizeClick = this.handleMaximizeClick.bind(this);
    this.stop = this.stop.bind(this);
  }
  handleMaximizeClick() {
    ipcRenderer.send('max-window');
  }
  // prevent the sale from expanding by double clicking on the input
  stop(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div>
        <Header handleMaximizeClick={this.handleMaximizeClick} stop={this.stop} />
      </div>
    );
  }
}
