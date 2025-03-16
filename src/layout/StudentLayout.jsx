import { Outlet } from 'react-router-dom';
import '../assets/styles/admin-layout.css'; 
import bgImage from '../assets/images/uog-logo.png';
import StudentSideNavbar from '../components/StudentSideNavBar';

export const StudentLayout = () => {
  return (
    <div className="admin-layout">
      <StudentSideNavbar/>
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

