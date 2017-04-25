import React from 'react';
import PropTypes from 'prop-types';

export default function AppTitle(props) {
  return (
    <h1>{props.title}</h1>
  );
}

AppTitle.propTypes = {
  title: PropTypes.string.isRequired
};
