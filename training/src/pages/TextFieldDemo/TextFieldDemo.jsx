import React from 'react';
import { TextField, Slider } from '../../components';

function TextFieldDemo() {
  const banners = ['cloud.jpg', 'dns-server.png', 'full-stack-web-development.jpg', 'js.jpg', 'load-balancer.png'];
  return (
    <div>
      <Slider banners={banners} height={300} random={false} duration={2000} />
      <h4> This is Disabled Input</h4>
      <TextField disabled value="Disabled" />
      <h4> This is Valid Input</h4>
      <TextField value="Accessible" />
      <h4> This is Error Input</h4>
      <TextField error value={101} />
    </div>
  );
}

export default TextFieldDemo;
