import { Outlet } from 'react-router-dom';
import '../assets/styles/admin-layout.css'; 
import bgImage from '../assets/images/uog-logo.png';
import TeacherSideNavbar from '../components/TeacherSideNavBar';

export const TeacherLayout = () => {
  return (
    <div className="admin-layout">
      <TeacherSideNavbar/>
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

