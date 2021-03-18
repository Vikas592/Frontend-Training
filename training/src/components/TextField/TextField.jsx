import React from 'react';
import PropTypes from 'prop-types';
import { valueStyle, errorStyle, defaultStyle } from './style';

function TextField(props) {
  const { value, error, handleNameChange } = props;

  return (
    <div>
      <input type="text" value={value} style={error ? { ...errorStyle, ...defaultStyle } : { ...valueStyle, ...defaultStyle }} onChange={(e) => handleNameChange(e)} />
    </div>
  );
}

export default TextField;

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleNameChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  error: '',
};
