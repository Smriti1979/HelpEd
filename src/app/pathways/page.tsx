
"use client"
import "../globals.css";
import React, { useState } from 'react';
import Link from "next/link"
import SignOutButton from '../../components/singout';
import HomeButton from "@/components/homeButton";

const Dashboard = () => {
  const [bgColor, setBgColor] = useState<string>('linear-gradient(to bottom, rgb(42, 213, 197) 0%,rgb(9, 181, 235)50%');

  return (
    <div>
    <div className="header">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <div className='text-4xl text-white ml-12'style={{
        transition: 'background-color 0.3s, padding 0.3s',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: '5px 10px',
        border: 'none',
       
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLButtonElement;
        target.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        
      }} ><Link href="/dashboard"> HelpEd</Link></div>
    <div className="pathway">Pathway</div>

    <HomeButton/>
    
    <SignOutButton></SignOutButton>
    </div>
    </div>
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
            background-color: #183D49;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
      
          .line {
            flex: 1;
            border-top: 4px dashed #000;
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
