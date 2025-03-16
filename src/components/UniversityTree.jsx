import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const UniversityTree = () => {
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

  return (
    <div className="p-3">
      {faculties.length > 0 ? (
        faculties.map((faculty, idx) => <Faculty key={idx} faculty={faculty} />)
      ) : (
        <p className="text-muted">No faculties available.</p>
      )}
    </div>
  );
};

const Faculty = ({ faculty }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card mb-3">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h5 className="mb-0">📚 {faculty.facultyName}</h5>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && (
        <div className="card-body">
          {faculty.departments && faculty.departments.length > 0 ? (
            faculty.departments.map((dept, idx) => (
              <Department key={idx} department={dept} />
            ))
          ) : (
            <p className="text-muted ms-3">No departments available.</p>
          )}
        </div>
      )}
    </div>
  );
};

const Department = ({ department }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card mb-2 ms-3">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h6 className="mb-0">🏢 {department.departmentName}</h6>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && (
        <div className="card-body">
          {department.batches && department.batches.length > 0 ? (
            department.batches.map((batch, idx) => (
              <Batch key={idx} batch={batch} />
            ))
          ) : (
            <p className="text-muted ms-3">No batches available.</p>
          )}
        </div>
      )}
    </div>
  );
};

const Batch = ({ batch }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card mb-2 ms-4">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h6 className="mb-0">🎓 {batch.batchName}</h6>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && (
        <div className="card-body">
          {batch.sections && batch.sections.length > 0 ? (
            batch.sections.map((section, idx) => (
              <Section key={idx} section={section} />
            ))
          ) : (
            <p className="text-muted ms-3">No sections available.</p>
          )}
        </div>
      )}
    </div>
  );
};

const Section = ({ section }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card mb-2 ms-5">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <h6 className="mb-0">🧑‍🏫 {section.sectionName}</h6>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && (
        <div className="card-body">
          {section.students && section.students.length > 0 ? (
            <ul className="list-group list-group-flush">
              {section.students.map((student, idx) => (
                <li key={idx} className="list-group-item">
                  👨‍🎓 {student}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted ms-3">No students enrolled.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UniversityTree;
