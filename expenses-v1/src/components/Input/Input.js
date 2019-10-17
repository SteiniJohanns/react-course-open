import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.label`
  width: 5em;
`;

const Input = ({ name, value, handleChange }) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    <input
      name={name}
      className="Input"
      type="text"
      value={value}
      onChange={e => handleChange(e)}
    />
  </Container>
);

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func
};

Input.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {}
};

export default Input;
