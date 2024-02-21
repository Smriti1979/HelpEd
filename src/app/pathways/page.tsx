// dashboard.js
"use client"
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Your Dashboard</h1>
        <div className="header-buttons">
          <button>Add Student</button>
          <button>Pathway</button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section>
          {/* Replace the dummy buttons with your actual pathway buttons */}
          <div className='box'>
            <h1>1</h1>
          </div>
        </section>
      </main>

      {/* Styles */}
      <style jsx>{`
         body {
            background-color: #fff; 
            margin: 0; 
            font-family: 'Arial', sans-serif; 
          }
          
        header {
          width: 100%;
          text-align: center;
          padding: 1rem;
          background-color: #2AD5C5;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-buttons {
          display: flex;
        }

        main {
          padding: 2rem;
        }

        box{
            width: 100px;
            height: 100px;
            background-color: #2AD5C5;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        section {
          margin-bottom: 1rem;
        }

        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1rem;
        }

        button {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
