import React from 'react'
import Button from '@material-ui/core/Button';

export default function button(props) {
    const {text,size,color,variant,name,onClick ,...other} = props
    return (
        <Button 
            variant={variant || "contained"}
            name={name}
            size={size || "large"}
            color={color || "primary"}
        >{text}</Button>
    )
}
