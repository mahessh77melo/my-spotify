import React,{ Component } from 'react'
import './myApp.css'
import Item from './TodoList'
import toDo from './toDoData.js'

class MyApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos : toDo,
      isPending : true
    }
    this.myToggle = this.myToggle.bind(this)
  }
  myToggle(id){
    this.setState(prevState =>{
      const updatedTodos = prevState.todos.map((todo) => {
        if(todo.id === id){
          console.log("current status",id,todo.status)
          todo.status = !todo.status
          console.log("changed status",id,todo.status)
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  componentDidMount(){
    console.log("mounted")
  }
  render(){
    console.log(this.state)
    const todoComp = this.state.todos.map((item) => <Item key={item.id} id={item.id} item={item} myToggle={this.myToggle} />)

    return(
      <>
      {this.state.isPending ?
        <div className="myapp">
          <div className="todo__list">{todoComp}</div>
        </div>
      : <h1>No pending works thala</h1>
      }
    </>
    )
  }
}

export default MyApp
