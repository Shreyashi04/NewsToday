import React from 'react';

export default function LoadingCard() {
  const glassStyle = {
    width: '18rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '10px',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  };

  const skeletonStyle = {
    background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '8px',
  };

  return (
    <div className="card my-3" style={glassStyle}>
      <div style={{ ...skeletonStyle, height: '150px', marginBottom: '10px' }}></div>
      <div className="card-body">
        <div style={{ ...skeletonStyle, height: '20px', marginBottom: '8px', width: '80%' }}></div>
        <div style={{ ...skeletonStyle, height: '15px', marginBottom: '8px', width: '90%' }}></div>
        <div style={{ ...skeletonStyle, height: '15px', marginBottom: '15px', width: '60%' }}></div>
        <div style={{ ...skeletonStyle, height: '35px', width: '100px', borderRadius: '5px' }}></div>
      </div>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </div>
  );
}
