import React from 'react';
import { TextField, Slider } from '../../components';

function TextFieldDemo() {
  const banners = ['cloud.jpg', 'dns-server.png', 'full-stack-web-development.jpg', 'js.jpg', 'load-balancer.png'];
  return (
    <div>
      <Slider banners={banners} height={300} random={false} duration={2000} />
      <TextField disabled />
      <TextField value="Accessible" />
      <TextField error />
    </div>
  );
}

export default TextFieldDemo;
