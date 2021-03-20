import React from 'react';
import PropTypes from 'prop-types';
import { selectStyle } from './style';

function SelectField(props) {
  const {
    defaultText,
    value,
    error,
    options,
    handleSportChange,
  } = props;
  return (
    <div>
      <select
        name="sport"
        value={value || defaultText}
        onChange={handleSportChange}
        style={error ? {} : selectStyle}
      >
        {options.map((item) => <option key={item.key} value={item.value}>{item.value}</option>)}
      </select>
    </div>
  );
}

export default SelectField;

SelectField.propTypes = {
  defaultText: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.exact({ key: PropTypes.string, value: PropTypes.string })),
  handleSportChange: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
  defaultText: 'Select',
  error: '',
  options: [],
};
