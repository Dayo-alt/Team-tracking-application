import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import EmployeeContext from './EmployeeContext';
import './Manageemployee.css';

const ManageEmployee = () => { 
    const { employeeData, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
    const [employee, setEmployee] = useState({ id: '', name: '', sex: 'Male', role: '', team: 'Team A' });

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee.id) {
            updateEmployee(employee);
        } else {
            addEmployee({ ...employee, id: Date.now() });
        }
        setEmployee({ id: '', name: '', sex: 'Male', role: '', team: 'Team A' });
    };

    const handleEdit = (emp) => {
        setEmployee(emp);
    };

    const handleDelete = (id) => {
        deleteEmployee(id);
    };

    return (
        <div className="manage-employee">
            <h1>MANAGE EMPLOYEE</h1>
            <div >
                <Link to="/" className="link">HOMEPAGE</Link>
                </div>
            <form onSubmit={handleSubmit} className="employee-form">
                <input type="hidden" name="id" value={employee.id} />
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={employee.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Sex:</label>
                    <select name="sex" value={employee.sex} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Role:</label>
                    <input type="text" name="role" value={employee.role} onChange={handleChange} required />
                </div>
                <div>
                    <label>Team:</label>
                    <select name="team" value={employee.team} onChange={handleChange}>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                        <option value="Team D">Team D</option>
                    </select>
                </div>
                <button type="submit">{employee.id ? 'Update' : 'Add'} Employee</button>
            </form>

            <div className="employee-list">
                <h2> Employee List</h2>
                <ul>
                    {employeeData.map(emp => (
                        <li key={emp.id}>
                            {emp.name} - {emp.role} - {emp.team}
                            <button onClick={() => handleEdit(emp)}>Edit</button>
                            <button onClick={() => handleDelete(emp.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageEmployee;
