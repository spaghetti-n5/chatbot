import React from 'react';

import Aux from './../../hoc/Aux/Aux';

const matchedItems = (props) => (
  <Aux>
    <td>{props.productName}</td>
    <td>{props.brand}</td>
    <td>{props.plan} € per month</td>
  </Aux>
  );

export default matchedItems;
