import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_BANNER_IMAGE } from '../../configs/constants';
import sliderStyle from './style';

function Slider(props) {
  const {
    altText,
    banners,
    defaultBanner,
    // duration,
    height,
    random,
  } = props;
  return (
    <div style={sliderStyle}>
      <img alt={altText} src={random ? banners[0] : defaultBanner} height={height} />
    </div>
  );
}

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string),
  defaultBanner: PropTypes.string,
  // duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};

Slider.defaultProps = {
  altText: 'Default Banner',
  banners: [],
  defaultBanner: DEFAULT_BANNER_IMAGE,
  // duration: 2000,
  height: 200,
  random: false,
};

export default Slider;
