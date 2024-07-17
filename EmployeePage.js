import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Adjust the path if needed
import female from './images/female.jpg';
import male from './images/male.jpg';
import EmployeeContext from './EmployeeContext'; 

const EmployeePage = () => {
    const { employeeData } = useContext(EmployeeContext);
    const [selectedTeam, setSelectedTeam] = useState('Team A');

    const handleTeamChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    const filteredData = employeeData.filter(employee => employee.team === selectedTeam);

    return (
        <div className="container">
            <div className="header">
                <div className="dropdown-section">
                    <label id="label" htmlFor="team-filter">SELECT TEAM: </label>
                    <select id="team-filter" value={selectedTeam} onChange={handleTeamChange} className="dropdown">
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                        <option value="Team D">Team D</option>
                    </select>
                </div>
                <Link className="homepage-link" to="/">Home Page</Link>
            </div>

            <div className="employee-grid">
                {filteredData.map(employee => (
                    <div key={employee.id} className="employee-card">
                        <img className="employee-img" src={employee.sex === 'Female' ? female : male} alt={employee.sex} />
                        <div className="employee-details">
                            <h5 className="employee-name">{employee.name}</h5>
                            <p className="employee-info"><strong>Role:</strong> {employee.role}</p>
                            <p className="employee-info"><strong>Team:</strong> {employee.team}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeePage;
