import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField, Radio } from '@material-ui/core';
import React, { useState } from 'react'
import { useForm, Form } from '../../useForm';
import Controls from '../../Controls/control';
import * as EmployeeServices from '../../Services/EmployeeServices'


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
    const { values, setValues, handleInputChange } = useForm(initialValues);
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
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
                    <Controls.Inputs
                        label="Mobile No."
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
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
                        name="submit"
                        color="primary"
                        text="Submit"
                        variant="contained"
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm;