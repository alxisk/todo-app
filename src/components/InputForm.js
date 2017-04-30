import React from 'react';
import PropTypes from 'prop-types';

export default function InputForm(props) {
  return (
    <form className="input-form" onSubmit={props.onsubmit}>
      <input type="text" name="entry" />
      <button className="btn input-form__btn">+ Add</button>
    </form>
  );
}

InputForm.propTypes = {
  onsubmit: PropTypes.func.isRequired
};
