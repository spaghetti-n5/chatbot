import React from 'react';

import classes from './Message.css';

const Message = (props) => (
   <div className={[classes.Message, classes[props.sender]].join(' ')}>
     <p className={[classes.Sender, classes[props.sender]].join(' ')}>{props.sender}</p>
     <p className={[classes.Text, classes[props.sender]].join(' ')}>{props.message} </p>
   </div>
);

export default Message;
