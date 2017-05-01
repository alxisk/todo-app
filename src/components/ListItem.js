import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  return (
    <li className="todo-list__list-item">
      <p>{props.text}</p>
      <div className="todo-list__btns">
        <button className="btn btn--blue todo-list__btn">E</button>
        <button className="btn btn--red todo-list__btn"
          onClick={props.handleRemove} data-id={props.id}>R</button>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
