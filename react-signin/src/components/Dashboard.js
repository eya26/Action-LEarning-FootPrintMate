import React from 'react';

const Dashboard = ({ carbonFootprint, ecoScore }) => {
  // Set a default value of 0 for carbonFootprint if it's not provided as a prop
  const initialCarbonFootprint = carbonFootprint || 0;

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div>
        <h3>Carbon Footprint</h3>
        {/* Use the initialCarbonFootprint to avoid accessing properties of undefined */}
        <p>{initialCarbonFootprint.toFixed(2)} kgCO2e</p>
      </div>
      <div>
        <h3>Eco Score</h3>
        <p>{ecoScore}</p>
      </div>
    </div>
  );
};

export default Dashboard;
