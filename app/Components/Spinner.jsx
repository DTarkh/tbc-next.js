import React from 'react';
import './Spinner.css'; // Import the CSS for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;