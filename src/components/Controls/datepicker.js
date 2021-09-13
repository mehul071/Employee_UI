import { MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import React from 'react'

export default function datepicker(props) {
    const {name,label,value,onChange} = props;
    const convertTodefaultEventPara = (name, value)=>({
        target:{
            name,value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                // disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={value}
                label={label}
                name={name}
                onChange={date => onChange(convertTodefaultEventPara(name,date))}
            >
            </KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}
