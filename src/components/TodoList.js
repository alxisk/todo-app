import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default function TodoList(props) {
  return (
    <div className="todo-list">
      <p className="todo-list__tasks-count">Tasks: {props.taskCount}</p>
      <ul className="todo-list__list">
        {props.entries.map(entry =>
          <ListItem key={entry.id} id={entry.id} text={entry.text}
            handleRemove={props.handleRemove}
            handleEdit={props.handleEdit}
            handleApplyEdit={props.handleApplyEdit} />)}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskCount: PropTypes.number.isRequired
};
