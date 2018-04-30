import React from 'react';

import Aux from './../../hoc/Aux/Aux';

const matchedItems = (props) => {
  const matches = props.data.map((m, id) => {
    return (
      <Aux key={m.id}>
        <tr>
         <td>{m.id}</td>
         <td>{m.productName}</td>
         <td>{m.brand}</td>
         <td>{m.plan}</td>
        </tr>
      </Aux>)
  });

  return (
    <Aux>
      <table style={{width:'100%'}}>
       <tbody>
        <tr>
         <th style={{width:'5%'}}>N°</th>
         <th style={{width:'60%'}}>Product</th>
         <th style={{width:'20%'}}>Brand</th>
         <th style={{width:'30%'}}>Monthly</th>
        </tr>
        {matches}
       </tbody>
      </table>
    </Aux>
  );
}

export default matchedItems;
