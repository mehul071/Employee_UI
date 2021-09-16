import React ,{useState} from 'react'
import { makeStyles } from '@material-ui/core';

export function useForm(initialValues,validateOnchange = false,validate) {
    const [values,setValues] = useState(initialValues);
    const [errors,setErrors] = useState({});
    const handleInputChange = e =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnchange)
            validate({[name]:value});

    }
    const reset = ()=>{
        setValues(initialValues);
        setErrors({});
    }
    return {
        reset,
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

const styles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))


export function Form(props) {
    const classes = styles();
    const {children,...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}