import React,{Component} from 'react'
class Item extends Component{
  render(){
    return (
      <div className="todo__item">
      <input type="checkbox"
        checked={this.props.item.status}
        onChange={(event) => this.props.myToggle(this.props.item.id)}
      />
      <p>{this.props.item.work}</p>
      </div>
    )
  }
}
export default Item
