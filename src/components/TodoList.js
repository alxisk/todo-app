import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default function TodoList(props) {
  return (
    <div>
      {props.entries.map(entry =>
        <ListItem key={entry.id} text={entry.text} />)}
    </div>
  );
}

TodoList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired
};
