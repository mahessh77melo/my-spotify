import React from 'react'
import { Component } from 'react'
import jokeSet from './JokeSet'

export default class JokeLine extends Component{
  render(){
    return(
      <div className="joke">
        <p>{this.props.question}</p>
        <p>{this.props.answer}</p>
      </div>
    )
  }
}
