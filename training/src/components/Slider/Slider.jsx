import React from 'react';

function Slider(props) {
  const {
    altText = 'Default Banner',
    banners = [],
    defaultBanner = 'default.png',
    duration = 2000,
    height = 200,
    random = false, } = props;
  return (
    <div>
      <h1>Slider components</h1>
    </div>
  );
}

export default Slider;

const Slider.PropTypes = {
  
}
