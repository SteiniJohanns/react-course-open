import React, { useState, useEffect } from 'react';

import Input from './components/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const List = styled.div`
  color: #09d3ac;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Bullet = styled.div`
  color: #09d3ac;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
`;

const App = () => {
  const [state, setState] = useState({
    name: '',
    cost: '',
    sum: 0,
    list: []
  });

  const Card = styled.div`
    width: 300px;
    height: 100px;
    background-color: azure;
    color: blueviolet;
    border: 2px solid darkgray;
    border-radius: 4px;
    margin: 3px;
  `;

  /* useEffect(() => {
    if (state.list.length === 1) {
      setState({ ...state, list: [...state.list, 'HEY'] });
    }
  }); */

  const handleChange = event => {
    if (event.target.name === 'Name') {
      //setState({ name: event.target.value });
      setState({ ...state, name: event.target.value });
    }
    if (event.target.name === 'Value') {
      //setState({ cost: event.target.value });
      setState({ ...state, cost: event.target.value });
    }
  };

  const handleSubmit = event => {
    if (state.name.length && state.cost.length) {
      setState({
        name: '',
        cost: '',
        sum: state.sum + Number(state.cost),
        list: [...state.list, state.name]
      });
    }
    // Prevents actual submit - would refresh page
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input name="Name" value={state.name} handleChange={handleChange} />
        <Input name="Value" value={state.cost} handleChange={handleChange} />
        <input type="submit" value="Click me!" />
      </Form>
      <List>
        <Bullet>
          <label htmlFor="list">List:</label>
          <output name="list">{'[ ' + state.list.join(', ') + ' ]'}</output>
        </Bullet>
        <Bullet>
          <label htmlFor="sum">Sum:</label>
          <output name="sum">{state.sum}</output>
        </Bullet>
      </List>
      {state.list.map(item => (
        <Card>{item}</Card>
      ))}
    </Wrapper>
  );
};

export default App;
