import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_BANNER_IMAGE, PUBLIC_IMAGE_FOLDER } from '../../configs/constants';
import sliderStyle from './style';
import { getRandomNumber, getNextRoundRobin } from '../../lib/utils/math';

function Slider(props) {
  const {
    altText,
    banners,
    defaultBanner,
    duration,
    height,
    random,
  } = props;

  const len = banners.length - 1;
  const [banner, setBanner] = useState(defaultBanner);
  const getBanner = () => {
    const index = getRandomNumber(len);
    const bannerURL = random ? PUBLIC_IMAGE_FOLDER + banners[index]
      : PUBLIC_IMAGE_FOLDER + banners[getNextRoundRobin(len, index)];

    return bannerURL;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner(getBanner());
    }, duration);
    return () => clearInterval(interval);
  }, []);// eslint-disable-line

  return (
    <div style={sliderStyle}>
      <img
        alt={altText}
        src={banner || defaultBanner}
        height={height}
      />
    </div>
  );
}

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
  defaultBanner: DEFAULT_BANNER_IMAGE,
  duration: 2000,
  height: 200,
  random: false,
};

export default Slider;
