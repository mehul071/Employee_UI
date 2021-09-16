import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme =>({
    root:{
        margin: theme.spacing(0.4)
    },
    label:{
        textTransform:"none"
    }
}))

export default function button(props) {
    const {text,size,color,variant,name,onClick,...other} = props;
    const classes = styles();
    return (
        <Button 
            variant={variant || "contained"}
            name={name}
            size={size || "large"}
            onClick={onClick}
            color={color || "primary"}
            {...other}
            classes={{root:classes.root,label:classes.label}}>
            {text}
            </Button>
    )
}
