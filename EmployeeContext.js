import React, { createContext, useState } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employeeData, setEmployeeData] = useState([
        { id: 1, name: 'John Doe', sex: 'Male', role: 'Developer', team: 'Team A' },
        { id: 2, name: 'Jane Smith', sex: 'Female', role: 'Designer', team: 'Team B' },
        { id: 3, name: 'Michael Johnson', sex: 'Male', role: 'Manager', team: 'Team C' },
        { id: 4, name: 'Emily Brown', sex: 'Female', role: 'Developer', team: 'Team D' },
        { id: 5, name: 'Daniel Lee', sex: 'Male', role: 'Designer', team: 'Team B' },
        { id: 6, name: 'Sophia Martinez', sex: 'Female', role: 'Manager', team: 'Team C' },
        { id: 7, name: 'David Wilson', sex: 'Male', role: 'Developer', team: 'Team A' },
        { id: 8, name: 'Olivia Johnson', sex: 'Female', role: 'Designer', team: 'Team B' },
        { id: 9, name: 'Ethan Thompson', sex: 'Male', role: 'Manager', team: 'Team D' },
        { id: 10, name: 'Isabella White', sex: 'Female', role: 'Developer', team: 'Team A' },
        { id: 11, name: 'Alexander Harris', sex: 'Male', role: 'Designer', team: 'Team D' },
        { id: 12, name: 'Emma Garcia', sex: 'Female', role: 'Manager', team: 'Team C' },
        { id: 13, name: 'William Rodriguez', sex: 'Male', role: 'Developer', team: 'Team C' },
    ]);

    const addEmployee = (employee) => {
        setEmployeeData([...employeeData, employee]);
    };

    const updateEmployee = (updatedEmployee) => {
        setEmployeeData(employeeData.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    };

    const deleteEmployee = (id) => {
        setEmployeeData(employeeData.filter(emp => emp.id !== id));
    };

    return (
        <EmployeeContext.Provider value={{ employeeData, addEmployee, updateEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeContext;
