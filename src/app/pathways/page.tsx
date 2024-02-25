"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import SignOutButton from '../../components/singout';
import HomeButton from '@/components/homeButton';
import PathwaysButton from '../../components/dashboardButton';

const Modal: React.FC<{ isVisible: boolean, text: string }> = ({ isVisible, text }) => {
  return (
<div style={{
    display: isVisible ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '700px',
    height: '500px' 
}}>
      {text}
    </div>
  );
};
const Dashboard: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('rgb(30,103,126)');

  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [modalText, setModalText] = useState<string>('');

  const handleMouseEnter = (buttonNumber: number) => {
    setHoveredButton(buttonNumber);
    setModalText(`Text for button ${buttonNumber}`);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
    setModalText('');
  };

  return (
    <div>
    <div className="header" style={{padding:"1.25rem", background: bgColor }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='text-white' style={{ display: 'flex', alignItems: 'center', fontSize: "4rem", marginLeft: '2rem', padding: '10px ' }}>
          Help<span style={{ color: '#101D62', fontWeight: 'bold' }}>Ed</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ padding: '0 10px' }}>
            <HomeButton />
          </div>
          <div style={{ padding: '0 10px' }}>
            <PathwaysButton />
          </div>
          <div style={{ marginRight: "2rem", padding: '0 10px' }}>
            <SignOutButton />
          </div>
        </div>
      </div>
   
  
  </div>
      <main style={{ display: 'flex', justifyContent: 'space-around', marginTop: '4rem' }}>

      <div className="button-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px' }}>
    <div style={{ width: '300px', height: '100px', position: 'relative', marginBottom: '20px' }}>
      <div style={{ width: '100%', height: '100%', padding: '8px 12px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium',textAlign:'center' }} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
       Level 1
      </div>
      </div>
    
          <div style={{ width: '300px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium',textAlign:'center', position: 'relative' }} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
          Level  5
          </div>
          <div style={{ width: '300px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium', textAlign:'center',position: 'relative' }} onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={handleMouseLeave}>
          Level  9
          </div>
          
        </div>
        <div className="button-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ width: '400px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium', textAlign:'center',position: 'relative' }} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
        Level 2
          </div>
          <div style={{ width: '400px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium',textAlign:'center', position: 'relative' }} onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
          Level 6
          </div>
          <div style={{ width: '400px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium', textAlign:'center',position: 'relative' }} onMouseEnter={() => handleMouseEnter(10)} onMouseLeave={handleMouseLeave}>
          Level   10
          </div>
          
        </div>
        <div className="button-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ width: '400px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium',textAlign:'center', position: 'relative' }} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
        Level  3
          </div>
          <div style={{ width: '400px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium', textAlign:'center',position: 'relative' }} onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
          Level  7
          </div>
          <div style={{ width: '400px', height: '100px', padding: '8px 12px', marginBottom: '20px', backgroundColor: '#E1F128', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '2rem', color: '#000', fontWeight: 'medium',textAlign:'center', position: 'relative' }} onMouseEnter={() => handleMouseEnter(11)} onMouseLeave={handleMouseLeave}>
          Level 11
          </div>
          
        </div>
        {/* Other button columns */}
      </main>
      <Modal isVisible={hoveredButton !== null} text={modalText} />

    </div>
  );
};

export default Dashboard;
