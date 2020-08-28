import React, { Component } from 'react';
class Meme extends Component {
  constructor(){
    super()
    this.state = {
      toptext:'',
      bottomtext: '',
      feedImg:'https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
      allmemeImgs:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const randNum = Math.floor((Math.random() * this.state.allmemeImgs.length) + 1);
    this.setState({feedImg:this.state.allmemeImgs[randNum].url})
    console.log(this.state.toptext+" "+ this.state.bottomtext);
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(res=>{
      const {memes} = res.data;
      console.log(memes[0])
      console.log();
        this.setState({
          allmemeImgs: memes
        })
    })
  }
  render() {
    return (
      <div className="meme__body">
        <form className="meme__form" onSubmit={this.handleSubmit}>
            <input name="toptext"type="text" placeholder="Header" onChange={this.handleChange} className="form__input"/>
            <input type="text" name="bottomtext" placeholder="Footer" onChange={this.handleChange} className="form__input"/>
          <button className="form__button" type="submit">Generate</button>
        </form>
        <div className="preview">
          <h2>{this.state.toptext}</h2>
          <img src={this.state.feedImg} className="meme__img"/>
          <h2>{this.state.bottomtext}</h2>
        </div>
      </div>
    );
  }
}

export default Meme;
