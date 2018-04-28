import React from 'react';

import classes from './Message.css';

const Message = (props) => (
    <div style={{width:'500px',border:'1px solid',textAlign:'center', margin:'10px auto'}}>
      <div className={classes[props.sender]}>
        {props.sender}
      </div>
      <div>
        {props.message}
      </div>
    </div>
  )

/*Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false
};*/

export default Message;
