import React, { Component } from 'react';



const NewTodoForm = ({onChange, onSubmit, draft}) => (
  <div>
    <input type="text" onChange={onChange} value={draft}/>
    <button onClick={onSubmit}>ADD</button>
  </div>
)

export default NewTodoForm