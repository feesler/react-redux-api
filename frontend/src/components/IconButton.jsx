import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function IconButton(props) {
  const { icon, className, ...rest } = props;
  const IconComponent = icon;

  return (
    <button className={classNames(['icon-btn', className])} {...rest}>
      <IconComponent />
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  className: PropTypes.string,
};
IconButton.defaultProps = {
  className: '',
};

export default IconButton;
