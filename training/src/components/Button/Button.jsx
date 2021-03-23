import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    color,
    disabled,
    style,
    value,
    handleClick,
  } = props;

  const backgroundColor = () => {
    if (color === 'danger') {
      return ({ backgroundColor: '#DB4437' });
    }
    if (color === 'primary') {
      return ({ backgroundColor: '#4285F4' });
    }

    return ({ backgroundColor: 'grey' });
  };

  return (
    <div>
      <button
        type="submit"
        disabled={disabled}
        onClick={(e) => handleClick(e)}
        // eslint-disable-next-line no-sequences
        style={{ ...style, ...backgroundColor() }}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  style: {},
};
