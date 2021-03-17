import React from 'react';
import { TextField, Slider } from '../../components';

function TextFieldDemo() {
  return (
    <div>
      <Slider />
      <TextField disabled />
      <TextField value="Accessible" />
      <TextField error />
    </div>
  );
}

export default TextFieldDemo;
