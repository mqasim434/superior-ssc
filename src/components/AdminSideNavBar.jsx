import { NavLink } from 'react-router-dom';
import '../assets/styles/sidebar.css';
import '../assets/styles/admin-layout.css';


const AdminSideNavbar = () => {
    return (
        <div className="sidebar">
            <h4>Admin Panel</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F4CA; Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/students" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F393; Students
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/teachers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F9D1;&#x200D;&#x1F3EB; Teachers
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F4DA; Courses
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/departments" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        &#x1F3E2; Departments
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

export default AdminSideNavbar;
