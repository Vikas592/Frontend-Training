import React from 'react';
import PropTypes from 'prop-types';
import { radioStyle } from './style';

function RadioGroup(props) {
  const {
    value,
    error,
    options,
    handleRadioChange,
  } = props;
  return (
    <form style={error ? {} : radioStyle} onChange={handleRadioChange}>
      {
        options.map((item) => (
          <div key={item.key}>
            <input
              type="radio"
              name={value}
              value={item.value}
            />
            <span>{item.value}</span>
            <br />
          </div>
        ))
      }
    </form>

  );
}

export default RadioGroup;

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.exact({
    key: PropTypes.string,
    value: PropTypes.string,
  })),
  handleRadioChange: PropTypes.func.isRequired,
};

RadioGroup.defaultProps = {
  error: '',
  options: [],
};
