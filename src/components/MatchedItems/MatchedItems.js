import React from 'react';

import Aux from './../../hoc/Aux/Aux';

const matchedItems = (props) => (
  <Aux>
    <span style={{margin:"10px"}}>{props.productName}</span>
    <span style={{margin:"10px"}}>{props.brand}</span>
    <span style={{margin:"10px"}}>{props.plan}</span>
  </Aux>
  );

export default matchedItems;
