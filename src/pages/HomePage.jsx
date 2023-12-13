import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1>COSALUX</h1>
      </header>

      <div className="container-wrapper">
        <div className="ContainerOne container">
          {/* Container 1 Content */}
          Container 1 Content
        </div>

        <div className="ContainerTwo container">
          {/* Container 2 Content */}
          Container 2 Content
        </div>

        <div className="ContainerThree container">
          {/* Container 3 Content */}
          Container 3 Content
        </div>
      </div>

      <footer className="footer">
        footer
        {/* Footer Content */}
      </footer>
    </div>
  );
}

export default HomePage;
