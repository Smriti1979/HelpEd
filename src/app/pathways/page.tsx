"use client"
import "../globals.css";
import React, { useState } from 'react';
import Link from "next/link"
import SignOutButton from '../../components/singout';
import HomeButton from "@/components/homeButton";
import PathwaysButton from '../../components/dashboardButton';

const Dashboard = () => {
  const [bgColor, setBgColor] = useState<string>('linear-gradient(to bottom, rgb(42, 213, 197) 0%,rgb(9, 181, 235)50%)');
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div className="header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <div className='text-4xl text-white ml-20 mt-10' style={{ fontSize: "4rem" }}>Help<span style={{ color: '#101D62', fontWeight: 'bold' }}>Ed</span></div>
          <div className='text-4xl text-white ml-12' style={{
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
            }}></div>

          <HomeButton />
          <PathwaysButton />
          <SignOutButton></SignOutButton>
        </div>
      </div>

      <main>
        <div className="level-buttons">
          
        </div>
      </main>

      <style jsx>{`
          body {
            background-color: #fff; 
            margin: 0; 
            padding:0;
            font-family: 'Arial', sans-serif; 
          }

          .header {
            width: 100%;
            padding-bottom: 20px;
            background-color: #1E677E;
          }

          .box{
            position: absolute;
            top: 0;
            left: 100%;
            width: 100px;
            height: 100px;
            background-color: #10BCE4;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
          }

          button{
            padding: 20px 30px 20px 30px ;
            background-color: #E1F128;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 2rem;
            color: #000;  
            font-weight: medium;
          }

          
      `}</style>
    </div>
  );
};

export default Dashboard;
