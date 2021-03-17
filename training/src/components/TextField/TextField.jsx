import React from 'react';
import PropTypes from 'prop-types';
import { valueStyle, errorStyle, defaultStyle } from './style';

function TextField(props) {
  const { value, error, onChange } = props;
  if (value) {
    return (
      <div>
        <input type="text" value={value} style={{ ...valueStyle, ...defaultStyle }} />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <input type="text" value={101} style={{ ...errorStyle, ...defaultStyle }} />
      </div>
    );
  }
  if (disabled) {
    return (
      <div>
        <input type="text" value="Disabled Input" disabled style={{ ...defaultStyle }} />
      </div>
    );
  }
}

export default TextField;

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
