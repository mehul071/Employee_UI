import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField,Radio } from '@material-ui/core';
import React,{useState} from 'react'
import {useForm,Form} from '../../useForm';
import Controls from '../../Controls/control';
import * as EmployeeServices from '../../Services/EmployeeServices'


const genderitems = [
    {id:"male", title:"Male"},
    {id:"female", title:"Female"},
    {id:"other", title:"Other"}
]
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
                    <Controls.Inputs
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Inputs
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items = {genderitems}
                    />
                    <Controls.Select
                        name="department"
                        label="Department"
                        value={values.department}
                        onChange={handleInputChange}
                        options={EmployeeServices}
                        />
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm;