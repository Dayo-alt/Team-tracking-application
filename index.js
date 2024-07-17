import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmployeePage from './EmployeePage';
import ManageEmployee from './Manageemployee';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './EmployeeContext';

ReactDOM.render(
    <React.StrictMode>
        <EmployeeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/EmployeePage" element={<EmployeePage />} />
                    <Route path="/ManageEmployee" element={<ManageEmployee />} />
                </Routes>
            </Router>
        </EmployeeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
