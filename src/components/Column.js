import React from 'react';
import Box from './box';

const Column = (props) => {
    return (
        <div>
            {props.value.map(item =>{
                return <Box key={item.id} value={item} onClick = {props.onClick}/>
            })} 
         </div>
    )
}


export default Column; 