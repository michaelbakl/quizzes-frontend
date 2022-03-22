// eslint-disable-next-line no-unused-vars
import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.css';

const Button = (
  {
    children, onClick, className, disabled, active, ...atrs
  }
) => {
  /* eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }] */
  // const onClickAction = (e) => {
  //   if (disabled) {
  //     e.preventDefault();
  //   } else {
  //     return onClick(e);
  //   }
  // };

  const classes = classNames(
    'btn',
    className,
    { active },
  );

  const Tag = atrs.href ? 'a' : 'button';

  return (
    <Tag
      {...atrs}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {
  },
  className: '',
  disabled: false,
};

export default Button;
