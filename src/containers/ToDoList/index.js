import React, { Component } from 'react';
import ToDoItem from '../../components/ToDoItem'
import NewTodoForm from '../../components/NewTodoForm'
import styled from 'styled-components'

const Container = styled.div`
  background: #3A4149;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`


class ToDoList extends Component {
    static defaultProps = {
        tasks: [
            {done: true, text: "Zrobić aplikację ToDoList"},
            {done: false, text: "Wynieść śmieci"}
         ],
         title: "TO DO LIST"
    }

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
        <Container>
          {/* W tym miejscu nie musze pisac this.props.title*/}
          <h1>{title}</h1>
          {tasks.map(task => <ToDoItem text={task.text} done={task.done} />)}
      {/*}    <input type="text" onChange={this.updateDraft} value={draft}/>
          <button onClick={this.addToDo}>ADD</button>
       {*/}
  
        <NewTodoForm 
          onSubmit = {this.addToDo}
          onChange = {this.updateDraft}
          draft = {draft} />
        </Container>
      );
    }
  }

export default ToDoList