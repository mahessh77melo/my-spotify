import React from 'react'

export default class Log extends React.Component{
  constructor(){
    super ()
    this.state = {
      isLoggedin : false
    }
    this.logToggle = this.logToggle.bind(this)
  }
  logToggle(){
    this.setState({
      isLoggedin : !this.state.isLoggedin
    })
  }
  render(){
    return (
      <div>
        {this.state.isLoggedin ?
          <h1>Logged in bruh</h1>
        : <h1>Not logged in bruh</h1>}
        <button onClick={this.logToggle}>{this.state.isLoggedin ? "Logout" : "Login"}</button>
      </div>
    )
  }
}
