import React from 'react';

const Dashboard = ({ carbonFootprint, ecoScore }) => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div>
        <h3>Carbon Footprint</h3>
        <p>{carbonFootprint.toFixed(2)} kgCO2e</p>
      </div>
      <div>
        <h3>Eco Score</h3>
        <p>{ecoScore}</p>
      </div>
    </div>
  );
};

export default Dashboard;
