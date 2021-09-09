import { FormControl, FormLabel,RadioGroup as MuiRadioGroup ,Radio,FormControlLabel} from '@material-ui/core';
import React from 'react'

function RadioGroup(props) {
    const {value, name, onChange, label,items} = props;
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
                <MuiRadioGroup row 
                    name={name}
                    value={value}
                    onChange={onChange}>
                    {
                        items.map(
                            (items,index)=>(
                                
                            <FormControlLabel value={items.id} control={<Radio/>} label= {items.title}/>
                            )
                        ) 
                    }
                </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup;