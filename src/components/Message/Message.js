import React from 'react';
import PropTypes from 'prop-types';

import classes from './Message.css';

const message = (props) => (
   <div className={[classes.Message, classes[props.sender]].join(' ')}>
     <span className={[classes.Sender, classes[props.sender]].join(' ')}>{props.sender}</span>
     <span className={[classes.Text, classes[props.sender]].join(' ')}>{props.message}</span>
   </div>
);

message.defaultProps = {
  sender: PropTypes.string,
  message: PropTypes.string
};

export default message;
