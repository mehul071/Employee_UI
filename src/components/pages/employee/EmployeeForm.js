import { Grid, TextField } from '@material-ui/core';
import React,{useState} from 'react'

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
    const [values,setValues] = useState(initialValues);
    return (
        <div>
            <Grid container>
                <Grid item  xs={6}>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </div>
    )
}

export default EmployeeForm;