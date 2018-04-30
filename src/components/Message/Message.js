import React from 'react';

import classes from './Message.css';

const Message = (props) => (
   <div className={[classes.Message, classes[props.sender]].join(' ')}>
     <span className={[classes.Sender, classes[props.sender]].join(' ')}>{props.sender}</span>
     <span className={[classes.Text, classes[props.sender]].join(' ')}>{props.message}</span>
   </div>
);

export default Message;
