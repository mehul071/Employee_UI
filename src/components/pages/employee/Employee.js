import React from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import PageHeader from '../../PageHeader'

function Employee() {
    return (
        <>
            <PageHeader
            subtitle="New Employee"
            title="Form Design with validation" 
            icon={<PeopleOutlineIcon fontSize="large"/>}
        />
        <EmployeeForm/>
        </>
    )
}

export default Employee;