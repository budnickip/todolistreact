import React, { Component } from 'react';
import './App.css'

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({done: !this.state.done})
  }
  
  render(){
    const { text } = this.props
    return(<div onClick={this.toggleDone} className = {this.state.done ? 'doneToDo' : ''}>
      <p>
       {/*{this.props.task} */}
        {text}
      </p>
    </div>)
  }
}

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ""
  }

  updateDraft = event =>{
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    this.setState(state => ({
      tasks: [...state.tasks, {text: this.state.draft}], draft: ''
    }))
  }
  //dzięki przypisaniu const tite this props, nie musze w kodzie ponizej pisac
  //{this.props.title}, tylko samo {title}
  render(){
    const { title } = this.props
    const { tasks, draft} = this.state
    return(
      <div>
        {/* W tym miejscu nie musze pisac this.props.title*/}
        <h1>{title}</h1>
        {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
        <input type="text" onChange={this.updateDraft} value={draft}/>
        <button onClick={this.addToDo}>ADD</button>
      </div>
    );
  }
}

class App extends Component {
  myTasks = [
   {done: true, text: "Zrobić aplikację ToDoList"},
   {done: false, text: "Wynieść śmieci"}
]
  render(){
    return (
      <div className="App">
        <ToDoList title="TO DO LIST" tasks={this.myTasks} />
      </div>
    );
  }
}

export default App;
