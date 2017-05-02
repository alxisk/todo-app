import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  return (
    <li className="todo-list__list-item">
      <p>{props.text}</p>
      <div className="todo-list__btns" data-id={props.id}>
        <button className="btn btn--green btn--hidden todo-list__btn"
          onClick={props.handleApplyEdit}>A</button>
        <button className="btn btn--blue todo-list__btn"
          onClick={props.handleEdit}>E</button>
        <button className="btn btn--red todo-list__btn"
          onClick={props.handleRemove}>R</button>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
