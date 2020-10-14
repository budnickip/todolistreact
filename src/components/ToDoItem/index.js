import React, { Component } from 'react';
import styled from 'styled-components'

const Item = styled.div`
  background: #5C5E6D;
  margin: 5px;
  padding: 1px 10px 1px 10px;
  border-radius: 10px;
  color: ${props => props.done ? "red": "auto" };
  text-decoration: ${props => props.done ? "line-through": "auto"};
`
/* zapis 
 className = {this.state.done ? 'doneToDo' : ''}
 zastąpiony: 
 color: ${props => props.done ? "red": "auto" };
 i w divie w którym była ta klasa przekazujemy props done
 */

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
      return(
      <Item onClick={this.toggleDone} done={this.state.done}>
        <p>
         {/*{this.props.task} */}
          {text}
        </p>
      </Item>)
    }
  }

export default ToDoItem
  