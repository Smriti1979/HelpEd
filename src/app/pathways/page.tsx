// dashboard.js
"use client"
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>PATHWAY</h1>
        <div className="header-buttons">
          <button>Add Student</button>
          <button>Pathway</button>
        </div>
      </header>

      
      <main> 
        <div className="button-container">
          <button className="button">1</button>
          <div className="line"></div>
          <button className="button">2</button>
          <div className="line"></div>
          <button className="button">3</button>
          <div className="line"></div>
          <button className="button">4</button>
      </div>
      <div className="button-container">
          <button className="button">8</button>
          <div className="line"></div>
          <button className="button">7</button>
          <div className="line"></div>
          <button className="button">6</button>
          <div className="line"></div>
          <button className="button">5</button>
      </div>
      <div className="button-container">
          <button className="button">9</button>
          <div className="line"></div>
          <button className="button">10</button>
          <div className="line"></div>
          <button className="button">11</button>
          <div className="line"></div>
          <button className="button">12</button>
      </div>
      <div className="button-container">
          <button className="button">16</button>
          <div className="line"></div>
          <button className="button">15</button>
          <div className="line"></div>
          <button className="button">14</button>
          <div className="line"></div>
          <button className="button">13</button>
      </div>
      <div className="button-container">
          <button className="button">17</button>
          <div className="line"></div>
          <button className="button">18</button>
          <div className="line"></div>
          <button className="button">19</button>
          <div className="line"></div>
          <button className="button">20</button>
      </div>
      </main>

      <style jsx>{`
          body {
            background-color: #fff; 
            margin: 0; 
            padding:0;
            font-family: 'Arial', sans-serif; 
          }
          
          .button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
          }
      
          .button {
            padding: 40px 50px ;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
      
          .line {
            flex: 1;
            border-top: 4px dashed #fff;
            margin: 0 10px;
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

        .box{
            width: 100px;
            height: 100px;
            background-color: #10BCE4;
            border-radius: 10px;
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
          padding: 0.5rem 1rem;
          border: none;
          border-radius:20px;
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
