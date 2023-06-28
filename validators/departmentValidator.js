const departments = ['Marketting', 'Tech', 'Customer Success', 'Sales', 'HR'];

function validDepartment(department) {
    // Check if the department is present in the list of valid departments
    if(departments.includes(department)) return true;

    return false;
}

export default validDepartment;