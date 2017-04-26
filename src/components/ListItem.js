import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  return (
    <li className="todo-list__list-item">
      <p>{props.text}</p>
    </li>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
