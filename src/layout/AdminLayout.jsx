import AdminSideNavbar from '../components/AdminSideNavBar';
import { Outlet } from 'react-router-dom';
import '../assets/styles/admin-layout.css'; 
import bgImage from '../assets/images/uog-logo.png';

export const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSideNavbar />
      <div style={{backgroundImage:`url(${bgImage})`,
        backgroundSize: '50vw',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',}} className="content-area">
        <main className="content-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

