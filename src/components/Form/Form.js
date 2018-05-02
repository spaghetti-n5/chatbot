import React from 'react';
import PropTypes from 'prop-types';

import classes from './Form.css';

const form = (props) => (
  <form onSubmit={props.submitted} className={classes.Form}>
    <input type="text" value={props.value} onChange={props.changed}
      onKeyPress={props.keyboard} placeholder="Type your message" className={classes.Input}/>
    <input type="submit" value="Submit" className={classes.Submit} />
  </form>
);

form.propTypes = {
  submitted: PropTypes.func,
  value: PropTypes.string,
  changed: PropTypes.func,
  keyboard: PropTypes.func
};

export default form;
