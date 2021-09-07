import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField,Radio } from '@material-ui/core';
import React,{useState} from 'react'
import {useForm,Form} from '../../useForm';
import Inputs from '../../Controls/Inputs';
import RadioGroup from '../../Controls/RadioGroup';


const initialValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'',
    department:'',
    hireDate:new Date(),
    isPermenant:false,
}

function EmployeeForm() {
    const {values,setValues,handleInputChange} = useForm(initialValues);
    return (
        <Form>
            <Grid container>
                <Grid item  xs={6}>
                    <Inputs 
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Inputs
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row 
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}>
                            <FormControlLabel value="Male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="Other" control={<Radio/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm;