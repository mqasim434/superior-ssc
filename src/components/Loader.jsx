// components/Loader.jsx
import React from 'react';
import '../assets/styles/loader.css'; // Optional for custom styling

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="loader"></div> {/* You can replace this with a spinner */}
    </div>
  );
};

export default Loader;
