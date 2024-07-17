import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1>TEAM TRACKING APPLICATION</h1>
                <div>
                    <span className='left'>
                        <Link className="App-link" to="/EmployeePage">Employee Page</Link>
                    </span>
                </div>
                <div>
                    <span className='right'>
                        <Link className="App-link" to="/ManageEmployee">Manage Employees</Link>
                    </span>
                </div>
            </div>

            <div className="App-body">
                WELCOME TO TEAM TRACKING APPLICATION
            </div>

            <div className="App-footer">
                <p>Team Tracking Application</p>
            </div>
        </div>
    );
}

export default App;
