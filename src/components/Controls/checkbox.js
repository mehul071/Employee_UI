import React from 'react'
import {Checkbox as Muicheckbox, FormControl, FormControlLabel} from "@material-ui/core";


export default function checkbox(props) {
    const {label,name,onChange,value} = props;
    const convertTodefaultEventPara = (name, value)=>({
        target:{
            name,value
        }
    })
    return (
        <FormControl>
            <FormControlLabel 
                control={
                        <Muicheckbox 
                        checked={value}
                        onChange={e=>onChange(convertTodefaultEventPara(name,e.target.checked))}
                        name={name}
                        color="primary"
                        />
                }label={label}>
            </FormControlLabel>
        </FormControl>
    )
}