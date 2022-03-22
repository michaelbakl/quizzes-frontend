// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tag = this.props.href ? 'a' : 'button';
    return (
      <Tag
        className={this.props.className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Tag>
    );
  }
}

// const Button = (
//   {
//     children, onClick, className, disabled, active, ...atrs
//   }
// ) => {
/* eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }] */
// const onClickAction = (e) => {
//   if (disabled) {
//     e.preventDefault();
//   } else {
//     return onClick(e);
//   }
// };

// const classes = classNames(
//   'btn',
//   className,
//   { active },
// );

// const Tag = atrs.href ? 'a' : 'button';
//
// return (
//   <Tag
//     {...atrs}
//     className={classes}
//     disabled={disabled}
//     onClick={onClick}
//   >
//     {children}
//   </Tag>
// );
// };

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props,react/no-unused-prop-types
  active: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  href: PropTypes.string,
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {
  },
  className: '',
  disabled: false,
};

export default Button;
