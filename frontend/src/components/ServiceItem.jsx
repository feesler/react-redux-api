import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { ReactComponent as UpdateIcon } from '../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../assets/close.svg';

const ServiceItem = (props) => {
  const { id, name, price, onUpdate, onDelete } = props;

  return (
    <li className="list-group-item">
      <span className="service-item__name">{name}</span>
      <span className="service-item__price">{price}</span>
      <IconButton icon={UpdateIcon} onClick={() => onUpdate(id)} />
      <IconButton icon={DeleteIcon} onClick={() => onDelete(id)} />
    </li>
  );
}

ServiceItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ServiceItem;
