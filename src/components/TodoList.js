import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import ListItem from './ListItem';

const TodoList = SortableContainer(props =>
  <div className="todo-list">
    <p className="todo-list__tasks-count">Tasks: {props.taskCount}</p>
    <ul className="todo-list__list">
      {props.entries.map((entry, index) =>
        <ListItem
          key={entry.id} index={index} id={entry.id} text={entry.text}
          handleRemove={props.handleRemove}
          handleEdit={props.handleEdit}
          handleApplyEdit={props.handleApplyEdit}
        />)}
    </ul>
  </div>
);

export default TodoList;

TodoList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskCount: PropTypes.number.isRequired
};
