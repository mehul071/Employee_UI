import { TextField } from '@material-ui/core';
import React from 'react'

function Inputs(props) {
    const {name,label,value,error = null,onChange} = props;
    return (
        <>
        <TextField
            variant = "outlined"
            label= {label}
            name= {name}
            value= {value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
        </>
    )
}

export default Inputs;