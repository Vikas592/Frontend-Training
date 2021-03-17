import React from 'react';
import PropTypes from 'prop-types';

function Slider(props) {
  const {
    altText,
    banners,
    defaultBanner,
    duration,
    height,
    random,
  } = props;
  return (
    <div>
      <h1>Slider components</h1>
    </div>
  );
}

export default Slider;

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string),
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};

Slider.defaultProps = {
  altText: 'Default Banner',
  banners: [],
  defaultBanner: 'default.png',
  duration: 2000,
  height: 200,
  random: false,
};
