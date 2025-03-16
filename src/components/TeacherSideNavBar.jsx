import { NavLink } from 'react-router-dom';
import '../assets/styles/sidebar.css';
import '../assets/styles/admin-layout.css';


const StudentSideNavbar = () => {
    return (
        <div style={{background:'#5F9EA0'}} className="sidebar">
            <h4>Teacher Panel</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/teacher/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F4CA; Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/teacher/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F393; Courses
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/teacher/assignments" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F9D1;&#x200D;&#x1F3EB; Assignments
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/teacher/attendances" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F4DA; Attendances
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/teacher/timetable" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
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
