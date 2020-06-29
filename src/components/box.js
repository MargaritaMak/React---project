import React from 'react';
import Button from './Button';

const Box = (props) => {
   return ( 
      <td> 
      <span>{props.value.user}</span>
      <Button value = 'click' onClick ={()=> {props.onClick(props.value.id)}}/>
      </td>
    )
}

export default Box; 