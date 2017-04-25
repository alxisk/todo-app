import React from 'react';

export default function InputForm(props) {
  return (
    <form className="InputForm" onSubmit={props.onsubmit}>
      <input type="text" name="entry" />
      <button>+</button>
    </form>
  );
}
