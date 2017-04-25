import React from 'react';
import PropTypes from 'prop-types';

export default function ListItem(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
