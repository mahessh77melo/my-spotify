import React, { Component } from 'react';
import Header from './header'
import Meme from './meme'
import './MemeGen.css'
class MemeGen extends Component {
  constructor(){
    super ()
    this.state = {}
  }
  render() {
    return (
      <div className="meme">
        <h1>Meme Generator</h1>
        <Header />
        <Meme />
      </div>
    );
  }
}

export default MemeGen;
