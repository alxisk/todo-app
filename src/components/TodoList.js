import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default function TodoList(props) {
  return (
    <div className="todo-list">
      <ul className="todo-list__list">
        {props.entries.map(entry =>
          <ListItem key={entry.id} text={entry.text} />)}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired
};
