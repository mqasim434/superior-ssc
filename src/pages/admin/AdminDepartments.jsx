import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const AdminDepartments = () => {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [faculties, setFaculties] = useState([]); 

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const facultiesCollection = collection(db, 'faculties');
        const facultiesSnapshot = await getDocs(facultiesCollection);
        const facultiesList = facultiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFaculties(facultiesList);
      } catch (error) {
        console.error('Error fetching faculties:', error);
      }
    };

    fetchFaculties();
  }, []);

  const toggleFaculty = (index) => {
    setExpandedFaculty(expandedFaculty === index ? null : index);
  };

  return (
    <div>
      <h2 className="p-3 dashboard-header">&#x1F3E2; Faculties & Departments</h2>
      <div className="accordion p-3">
        {faculties.map((facultyItem, index) => (
          <div key={facultyItem.id} className="card mb-2">
            <div
              className="card-header d-flex justify-content-between align-items-center"
              onClick={() => toggleFaculty(index)}
              style={{ cursor: 'pointer', background: '#f8f9fa' }}
            >
              <h5 className="mb-0">📚 {facultyItem.facultyName}</h5>
              <span>{expandedFaculty === index ? '-' : '+'}</span>
            </div>

            {expandedFaculty === index && (
              <div className="card-body">
                <ul className="list-group">
                  {facultyItem.departments && facultyItem.departments.length > 0 ? (
                    facultyItem.departments.map((dept, deptIndex) => (
                      <li key={deptIndex} className="list-group-item">
                        🏢 {dept.departmentName}
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No departments found.</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
