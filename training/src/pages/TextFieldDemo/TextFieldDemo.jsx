import React from 'react';
import { TextField } from '../../components';

function TextFieldDemo() {
  return (
    <div>
      <h2>This is disabled input</h2>
      <TextField disabled />
      <h2>A Valid Input</h2>
      <TextField value="Accessible" />
      <h2>An Input with Errors</h2>
      <TextField error />
      <p style={{ color: 'red' }}>Cannot be greater than </p>
    </div>
  );
}

export default TextFieldDemo;
