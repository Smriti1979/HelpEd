// components/Homepage.tsx
"use client"
import React from 'react';
import Link from "next/link"
import SignOutButton from '../../components/singout';
import HomeButton from "@/components/homeButton";
import PathwaysButton from '../../components/pathwayButton';


const Homepage: React.FC = () => {
  return (
    <div>
    <div className="header">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <div className='text-4xl text-white ml-20 mt-10' style= {{fontSize:"4rem"}}>Help<span style={{color:'#101D62', fontWeight: 'bold'}}>Ed</span></div>
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
        
      }} ></div>

    <HomeButton/>
    <PathwaysButton/>
      
    <SignOutButton></SignOutButton>
    </div>
    </div>
      <main> 
        <div className="img-container">
        <div className="childrenImage">
          <img src="images\image.jpg"></img>
        </div>
        <div className="image-text">Education is the most powerful weapon which you
          can use to change the world. - Nelson Mandela</div>
        </div>
        <div className="probcontainer">
          <img src="images/theproblem.jpg"></img>
        </div>

        <div className="solution">
          <h1>The Solution</h1>
        </div>
        <div className="sol-para">
        <p>There are a lot of NGOs and non-profitable organizations that work
           towards providing education to unprivileged children. In these organization people go to slums and 
           teach children. While doing that, it’s difficult for them to track progress of the children they are teaching and 
           teaching them from right resource. HelpEd helps these organizations to track the student’s progress as well as provides a 
           pathway along with some assignments. completion of which the student’s are assigned some levels.</p>
        </div>
      <div className="big-container" >
        <div className="heading">
         <h1>Our Vision</h1>
        </div> 
      </div>
       
        
      </main>

      <style jsx>{`
          * {
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

          .header {
          width: 100%;
          padding: 1rem;
          background-color: #1E677E;
        }

        .header-buttons {
          display: flex;
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

        .childrenImage img{
          width: 100%;
          height: 1000px;
        }

        .image-text {
          position: absolute;
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          color: black; 
          font-size: 40px; 
          font-weight: bold; 
          text-align: center; 
          line-height: 1.5;
        }

        .probcontainer img{
          width: 100%;
          height: 500px;
          margin-top: 50px;
        }

        .solution{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          font-size: 70px;
          font-weight: bold;
          margin-top: 50px;
        }
        
        .sol-para{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          margin-left: 400px;
          margin-right: 400px;
          line-height: 1.5;
          margin-top: 50px;
          margin-bottom: 50px;
          align-text: center;
        }

        .big-container{
          background-color: rgba(30,103,126,0.7);
          height: 300px;
        }

        .heading{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3rem;
          font-size: 70px;
          font-weight: bold;
          color: white;
        }

      `}</style>
    </div>
  
  );
};

export default Homepage;
