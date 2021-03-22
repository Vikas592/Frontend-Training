import React from 'react';
import PropTypes from 'prop-types';

function Math(props) {
  const { first, second, operator, children } = props;
  return (
    <div />
  );
}

export default Math;

Math.propTypes = {
first: PropTypes.number.isRequired,
second: PropTypes.number.isRequired,
operator: PropTypes.oneOf(['+', '-', '/', '*']).isRequired,
};
