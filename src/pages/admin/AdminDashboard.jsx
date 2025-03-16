import React from 'react';



export const AdminDashboard = () => {
  const stats = [
    { label: 'Students', count: 1200, icon: '🎓', color: 'primary' },
    { label: 'Teachers', count: 80, icon: '🧑‍🏫', color: 'success' },
    { label: 'Courses', count: 45, icon: '📚', color: 'info' },
    { label: 'Batches', count: 30, icon: '🎯', color: 'warning' },
    { label: 'Faculties', count: 8, icon: '🎯', color: 'dark' },
    { label: 'Departments', count: 24, icon: '🎯', color: 'secondary' },
  ];

  return (
    <div style={{ overflowX: 'hidden'}}>
      <h2 className="p-3 dashboard-header">📊 Dashboard Overview</h2>
      <div className="row p-3" >
        {stats.map((item, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className={`card text-white bg-${item.color} h-100 shadow-sm`}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{item.label}</h5>
                    <h3>{item.count}</h3>
                  </div>
                  <div style={{ fontSize: '3rem' }}>{item.icon}</div>
                </div>
              </div>
              <div style={{cursor:'pointer'}} className="card-footer text-center">
                <small>View All {item.label}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
