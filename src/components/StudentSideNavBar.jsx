import { NavLink } from 'react-router-dom';
import '../assets/styles/sidebar.css';
import '../assets/styles/admin-layout.css';


const StudentSideNavbar = () => {
    return (
        <div style={{background:'#0066b2'}} className="sidebar">
            <h4>Student Panel</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/student/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F4CA; Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/student/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F393; Courses
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/student/assignments" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F9D1;&#x200D;&#x1F3EB; Assignments
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/student/attendances" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F4DA; Attendances
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/student/timetable" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F3E2; Timetable
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <span>&#x1F51A; Logout</span>
                    </NavLink>
                </li>
                

            </ul>
        </div>
    );
};

export default StudentSideNavbar;
