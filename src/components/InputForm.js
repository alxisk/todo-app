import React from 'react';
import PropTypes from 'prop-types';

export default function InputForm(props) {
  return (
    <form className="InputForm" onSubmit={props.onsubmit}>
      <input type="text" name="entry" />
      <button>+</button>
    </form>
  );
}

InputForm.propTypes = {
  onsubmit: PropTypes.func.isRequired
};
