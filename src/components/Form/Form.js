import React from 'react';

const form = (props) => (
  <form onSubmit={props.submitted}>
    <input value={props.value} onChange={props.changed}
      onKeyPress={props.keyboard} />
    <input type="submit" value="Submit" />
  </form>
);

export default form;
