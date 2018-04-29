import React from 'react';

import classes from './Form.css';

const form = (props) => (
  <form onSubmit={props.submitted} className={classes.Form}>
    <input type="text" value={props.value} onChange={props.changed}
      onKeyPress={props.keyboard} placeholder="Type your message" className={classes.Input}/>
    <input type="submit" value="Submit" className={classes.Submit} />
  </form>
);

export default form;
