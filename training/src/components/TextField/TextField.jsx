import React from 'react';
import PropTypes from 'prop-types';
import {
  valueStyle,
  errorStyle,
  defaultStyle,
  inputDivStyle,
} from './style';

function TextField(props) {
  const { value, error, disabled } = props;
  if (value) {
    return (
      <div style={inputDivStyle}>
        <h2>A Valid Input</h2>
        <input type="text" value={value} style={{ ...valueStyle, ...defaultStyle }} />
      </div>
    );
  }
  if (error) {
    return (
      <div style={inputDivStyle}>
        <h2>An Input with Errors</h2>
        <input type="text" value={101} style={{ ...errorStyle, ...defaultStyle }} />
        <p style={{ color: 'red' }}>Cannot be greater than </p>
      </div>
    );
  }
  if (disabled) {
    return (
      <div style={inputDivStyle}>
        <h2>This is disabled input</h2>
        <input type="text" value="Disabled Input" disabled style={{ ...defaultStyle }} />
      </div>
    );
  }
}

export default TextField;

TextField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};
