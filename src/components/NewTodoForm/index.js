import React, { Component } from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  background: #1f2427;
  color: #fff;
  width: 100%;
  border: 0;
  border-radius: 5px 0px 0px 5px;
  padding: 5px;
`
const Button = styled.button`
  background: #1f2427;
  color: #214D55;
  font-size: 1.5rem;
  border: 0;
  padding: 5px;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between; 
`

const NewTodoForm = ({onChange, onSubmit, draft}) => (
  <Container>
    <TextInput type="text" onChange={onChange} value={draft} placeholder="Wprowadź nowe zadanie do wykonania"/>
    <Button onClick={onSubmit}>+</Button>
  </Container>
)

export default NewTodoForm