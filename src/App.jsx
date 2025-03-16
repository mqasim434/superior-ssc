import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AdminLayout} from './layout/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminStudents } from './pages/admin/AdminStudents';
import { AdminTeachers } from './pages/admin/AdminTeachers';
import { AdminDepartments } from './pages/admin/AdminDepartments';
import {StudentLayout} from './layout/StudentLayout';
import { StudentCourses } from './pages/student/StudentCourses';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { StudentAssignments } from './pages/student/StudentAssignments';
import { StudentAttendances } from './pages/student/StudentAttendances';
import { StudentTimeTable } from './pages/student/StudentTimeTable';
import {TeacherLayout} from './layout/TeacherLayout';
import { TeacherCourses } from './pages/teacher/TeacherCourses';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { TeacherAssignments } from './pages/teacher/TeacherAssignments';
import { TeacherAttendances } from './pages/teacher/TeacherAttendances';
import { TeacherTimeTable } from './pages/teacher/TeacherTimeTable';
import { Login } from './pages/auth/login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="teachers" element={<AdminTeachers />} />
            <Route path="departments" element={<AdminDepartments />} />
          </Route>
          <Route path="/Student" element={<StudentLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="courses" element={<StudentCourses />} />
            <Route path="assignments" element={<StudentAssignments />} />
            <Route path="attendances" element={<StudentAttendances />} />
            <Route path="timetable" element={<StudentTimeTable />} />
          </Route>
          <Route path="/Teacher" element={<TeacherLayout />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="courses" element={<TeacherCourses />} />
            <Route path="assignments" element={<TeacherAssignments />} />
            <Route path="attendances" element={<TeacherAttendances />} />
            <Route path="timetable" element={<TeacherTimeTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
