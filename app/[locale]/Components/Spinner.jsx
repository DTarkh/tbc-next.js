import React from 'react';
import './Spinner.css'; // Import the CSS for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;