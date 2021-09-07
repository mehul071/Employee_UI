import React from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../PageHeader'
import { makeStyles,Paper } from '@material-ui/core';

const styles = makeStyles(theme => ({
    pageComponent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

function Employee() {
    const classes = styles();
    return (
        <>
            <PageHeader
            subtitle="Form Design with validation"
            title="New Employee " 
            icon={<PeopleOutlineIcon fontSize="large"/>}
        />
        <Paper className={classes.pageComponent}>
            <EmployeeForm/>
        </Paper>
        </>
    )
}

export default Employee;