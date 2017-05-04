import React from 'react';
import PropTypes from 'prop-types';
import {SortableElement} from 'react-sortable-hoc';

const ListItem = SortableElement((props) => {
  return (
    <li className="todo-list__list-item">
      <p>{props.text}</p>
      <div className="todo-list__btns" data-id={props.id}>
        <button className="btn btn--green btn--hidden todo-list__btn"
          onClick={props.handleApplyEdit}></button>
        <button className="btn btn--blue todo-list__btn"
          onClick={props.handleEdit}></button>
        <button className="btn btn--red todo-list__btn"
          onClick={props.handleRemove}></button>
      </div>
    </li>
  );
});

export default ListItem;

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
