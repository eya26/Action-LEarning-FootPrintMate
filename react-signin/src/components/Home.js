import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#FFF5F5F5', minHeight: '100vh', padding: '20px', position: 'relative' }}>
      <header className="text-center mt-5">
        <h1 style={{ color: '#17594A', fontSize: '48px', marginBottom: '20px' }}>FootprintMate</h1>
        <p className="lead" style={{ color: '#17594A', fontSize: '24px' }}>
          <span style={{ color: 'black', fontStyle: 'italic' }}> 
"Together for a Greener Planet – Start Today with FootprintMate."  </span>
        </p>
      </header>

      <img
        src="/logo.png" // Replace this path with the path to your logo.png image
        alt="Carbon Calculator"
        className="img-fluid"
        style={{ maxWidth: '300px', position: 'absolute', top: '20px', left: '20px' }}
      />

      <div className="container mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6" style={{ margin: '0 auto', textAlign: 'left' }}>
            <h2 style={{ color: '#17594A', textAlign: 'left', fontWeight: 'bold' }}> WHO ARE WE ?  </h2>
            <p style={{ color: 'black', textAlign: 'left', fontWeight: 'bold' }}>
             
Welcome to FootprintMate! Estimate your carbon footprint with our quick quiz and get personalized insights. Track your progress and take actionable steps to reduce your carbon footprint. Stay motivated with our gamified approach, embark on challenges, earn awards, and join our eco-conscious community.
            </p>
          
            <p style={{ color: 'black', textAlign: 'left', fontWeight: 'bold' }}>
              Start your journey towards a greener future today with FootprintMate!
            </p>
            <a
              href="/calculator"
              className="btn btn-success btn-lg"
              style={{ color: '#fff', backgroundColor: '#17594A', borderColor: '#17594A', textAlign: 'left' }}
            >
              Get Started
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="/home.png" // Replace this path with the path to your /home.png image
              alt="Additional Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
