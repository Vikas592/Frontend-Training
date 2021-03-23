import React from 'react';
import PropTypes from 'prop-types';

function Math(props) {
  const {
    first, second, operator, children,
  } = props;

  const getAnswer = () => {
    switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return second === 0 ? Infinity : first / second;
    default:
      return 'Invalid Operation';
    }
  };
  return (children
    ? children({
      first,
      second,
      operator,
      result: getAnswer(),
    }) : <div>{`${first} ${operator} ${second} = ${getAnswer()}`}</div>
  );
}

export default Math;

Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-', '/', '*']).isRequired,
  children: PropTypes.func,
};

Math.defaultProps = {
  children: null,
};
