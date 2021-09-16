import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField, Radio } from '@material-ui/core';
import React, { useState } from 'react'
import { useForm, Form } from '../../useForm';
import Controls from '../../Controls/control';
import * as EmployeeServices from '../../Services/EmployeeServices'
import { set } from 'date-fns';


const genderitems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" }
]
const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    department: '',
    hireDate: new Date(),
    isPermenant: false,
}

function EmployeeForm() {
    const validate = (fieldvalues = values)=>{
        let temp = {};
        if('fullName' in fieldvalues )
            temp.fullName = fieldvalues.fullName?"":"This is required...Error..!!"
        if('email' in fieldvalues)
            temp.email = (/$^|.+@.+..+/).test(fieldvalues.email)?"":"Email is not valid...Error..!!"
        if('mobile' in fieldvalues)
            temp.mobile = fieldvalues.mobile.length>9?"":"Enter correct number...Error..!!"
        if('department' in fieldvalues)
            temp.department = fieldvalues.department.length != 0?"":"This field is required...Error..!!"
        setErrors({...temp});
        if(fieldvalues == values)
            return Object.values(temp).every(x => x == "");
    }
    
    const handlesubmit = e =>{
        e.preventDefault()
        if(validate())
            window.alert("...hello hello mic testing 1 2 3");
    }
    const { values, setValues, handleInputChange,errors,setErrors,reset } = useForm(initialValues,true,validate);
    return (
        <Form onSubmit={handlesubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Inputs
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error = {errors.fullName}
                    />
                    <Controls.Inputs
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error = {errors.email}
                    />
                    <Controls.Inputs
                        label="Mobile No."
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error = {errors.mobile}
                    />
                    <Controls.Inputs
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderitems}
                    />
                    <Controls.Select
                        name="department"
                        label="Department"
                        value={values.department}
                        onChange={handleInputChange}
                        options={EmployeeServices.getEmployeeServices()}
                        error = {errors.department}
                    />
                    
                    <Controls.datepicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.checkbox
                        name="isPermenant"
                        label="Permanent Employee"
                        value={values.isPermenant}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.button 
                        type="submit"
                        text="Submit"
                        />
                        <Controls.button
                        text="Reset"
                        color="secondry"
                        onClick={reset}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm;