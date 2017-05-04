import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import {SortableContainer} from 'react-sortable-hoc';

const TodoList = SortableContainer((props) => {
  return (
    <div className="todo-list">
      <p className="todo-list__tasks-count">Tasks: {props.taskCount}</p>
      <ul className="todo-list__list">
        {props.entries.map((entry, index) =>
          <ListItem key={entry.id} index={index} id={entry.id} text={entry.text}
            handleRemove={props.handleRemove}
            handleEdit={props.handleEdit}
            handleApplyEdit={props.handleApplyEdit} />)}
      </ul>
    </div>
  );
});

export default TodoList;

TodoList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskCount: PropTypes.number.isRequired
};
