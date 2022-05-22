import React from 'react';
import { Button } from 'antd';

import './style.css';
import PropTypes from 'prop-types';

const EnterButton = ({
  text, onClick, className, disabled, type
}) => (
  <Button
    className={className}
    htmlType={type}
    shape="square"
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </Button>
);

EnterButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

EnterButton.defaultProps = {
  onClick: () => {},
  className: 'submit-button',
  disabled: false,
  type: 'submit'
};

export default EnterButton;
