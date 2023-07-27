import React, { useEffect, useState } from 'react';
import Dashboard2 from './DrawerSide';
import Card from '@mui/material/Card';

const Dashboard = () => {
  // State to hold the data from localStorage
  const [userData, setUserData] = useState(null);

  // Function to retrieve data from localStorage
  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('userData');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };

  // Effect to load data from localStorage on component mount
  useEffect(() => {
    const data = getDataFromLocalStorage();
    if (data) {
      setUserData(data);
    }
  }, []);

  // Set a default value of 0 for carbonFootprint and ecoScore if they're not available in localStorage
  const initialCarbonFootprint = userData ? userData.carbonFootprint : 0;
  const initialEcoScore = userData ? userData.ecoScore : 0;

  return (
    <div className="dashboard-container">
      
      <h2>Dashboard</h2>
      <div className='col-6'>
      <Card variant="outlined"><h3>Carbon Footprint</h3>
        <p>{initialCarbonFootprint.toFixed(2)} kgCO2e</p>
        </Card>
        
      </div>
      <div className='col-6'>
      <Card variant="outlined"><h3>Eco Score</h3>
        <p>{initialEcoScore}</p>
        </Card>
        
      </div>
    </div>
  );
};

export default Dashboard;
