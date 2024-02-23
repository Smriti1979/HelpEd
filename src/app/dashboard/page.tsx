"use client"
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';
import SignOutButton from '../../components/singout';
import { FaEdit } from 'react-icons/fa';

interface Location {
  _id: string;
  locationId: string;
  name: string;
  students: { studentId: string; name: string; age: number;level:number }[];
  __v: number;
}
interface Student {
  studentId: string;
  name: string;
  age: number;
  level:number;
  // Add other properties if needed
}
const EditStudentModal: React.FC<{
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  studentName: string;
  setStudentName: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  level: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
}> = ({ isOpen, closeModal, handleSubmit, studentName, setStudentName, age, setAge, level, setLevel }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          width: '500px',
          height: '500px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid rgb(42, 213, 197)',
          background: 'linear-gradient(to bottom, rgb(42, 213, 197) 0%, rgb(9, 181, 235) 100%',
          overflow: 'hidden',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%', marginBottom: '0px' }}>
        <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <label style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{
              background: 'transparent',
              color: 'white',
              fontSize: '16px',
              border: '1px solid white',
              padding: '5px 10px',
              transition: 'background 0.3s',
            }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              background: 'transparent',
              color: 'white',
              fontSize: '16px',
              border: '1px solid white',
              padding: '5px 10px',
              transition: 'background 0.3s',
            }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Enter level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{
              background: 'transparent',
              color: 'white',
              fontSize: '16px',
              border: '1px solid white',
              padding: '5px 10px',
              transition: 'background 0.3s',
            }}
          />
        </label>
        <button
          type="submit"
          className="text-xl text-white"
          style={{
            transition: 'background-color 0.3s, padding 0.3s',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            padding: '5px 10px',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            target.style.padding = '5px 10px';
          }}
        >
          Save
        </button>
      </form>
    </Modal>
  );
};



const AddStudentModal: React.FC<{
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  studentName: string;
  setStudentName: React.Dispatch<React.SetStateAction<string>>;
  locationName: string;
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  level: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  
}> = ({ isOpen, closeModal, handleSubmit, studentName, setStudentName, locationName, setLocationName, age, setAge, level, setLevel }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={{
      content: {
        width: '500px',
        height: '500px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '10px',
        border: '1px solid rgb(42, 213, 197)',
        background: 'linear-gradient(to bottom, rgb(33, 160, 173) 20%, rgb(9, 181, 235) 100%',
        overflow: 'hidden',
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
    }}>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%', marginBottom: '0px' }}>
        <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <label style={{ marginBottom: '10px' }}>
    <input 
      type="text" 
      placeholder="Enter student name" 
      value={studentName} 
      onChange={(e) => setStudentName(e.target.value)} 
      style={{ 
        background: 'transparent', 
        color: 'white', 
        fontSize: '16px',
        border: '1px solid white',
        padding: '5px 10px',
        transition: 'background 0.3s',
      }}
    />
  </label>
  <label style={{ marginBottom: '10px' }}>
    <input 
      type="text" 
      placeholder="Enter location name" 
      value={locationName} 
      onChange={(e) => setLocationName(e.target.value)} 
      style={{ 
        background: 'transparent', 
        color: 'white', 
        fontSize: '16px',
        border: '1px solid white',
        padding: '5px 10px',
        transition: 'background 0.3s',
      }}
    />
  </label>
  <label style={{ marginBottom: '10px' }}>
    <input 
      type="number" 
      placeholder="Enter age" 
      value={age} 
      onChange={(e) => setAge(e.target.value)} 
      style={{ 
        background: 'transparent', 
        color: 'white', 
        fontSize: '16px',
        border: '1px solid white',
        padding: '5px 10px',
        transition: 'background 0.3s',
      }}
    />
  </label>
  <label style={{ marginBottom: '10px' }}>
    <input 
      type="text" 
      placeholder="Enter level" 
      value={level} 
      onChange={(e) => setLevel(e.target.value)} 
      style={{ 
        background: 'transparent', 
        color: 'white', 
        fontSize: '16px',
        border: '1px solid white',
        padding: '5px 10px',
        transition: 'background 0.3s',
      }}
    />
  </label>
  <button
  type='submit'
  className='text-xl text-white'
  style={{
    transition: 'background-color 0.3s, padding 0.3s',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '5px 10px',
    border: 'none',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLButtonElement; 
    target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; 
    ; 
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLButtonElement; 
    target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; 
    target.style.padding = '5px 10px';
  }}
>
Add Student
</button></form>

    </Modal>
  );
};




const Page: React.FC =() => {
  const [locations, setLocations] = useState<{ _id: string; locationId: string; locationName: string }[]>([]);
  const [selectedLocationId, setSelectedLocationId] = useState<string>('');
  const [students, setStudents] = useState<{ studentId: string; name: string; age: number;level:number }[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');
  const [locationName, setLocationName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const router = useRouter();
  const [bgColor, setBgColor] = useState<string>('linear-gradient(to bottom, rgb(36, 182, 168) 0%,rgb(36, 182, 168)1%, rgb(33, 160, 173) 30%,rgb(9, 181, 235) 100%)');

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  
  const openEditModal = (studentId: string) => {
    setSelectedStudentId(studentId);
    setIsEditModalOpen(true);
  };
  
  const closeEditModal = () => {
    setSelectedStudentId('');
    setIsEditModalOpen(false);
  };
  

  
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch('/api/getLocation');
        const data = await res.json();
        const locationsData = data.map((location: any) => ({
          locationId: location.locationId,
          locationName: location.locationName,
        }));
        setLocations(locationsData);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    };
    fetchLocations();
  }, []);

  const handleLocationChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocationId = e.target.value;
    setSelectedLocationId(selectedLocationId);
    try {
      const res = await fetch('/api/getStudents');
      const data: Location[] = await res.json();
      console.log(data)
      const selectedLocationStudents = data.find((location) => location.locationId === selectedLocationId)?.students.map((student) => ({
        ...student,
        level: student.level, 
      })) || [];      
      setStudents(selectedLocationStudents);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    }
  };
 
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ locationName, studentName, age, level }),
    });

    if (response.ok) {
      closeModal()
      router.push('/signIn');
    } else {
      // Handle error
    }
  };
  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log()
    const response = await fetch('/api/editStudent', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ locationId: selectedLocationId, studentId: selectedStudentId, newName: studentName, newAge: parseInt(age),level:parseInt(level) }),
    });
  
    if (response.ok) {
      router.push('/signIn');
      closeEditModal();
    } else {
      // Handle error
    }
  };
  
  
  
  return (
    <div>
    <div style={{background: bgColor,marginBottom:"20px",paddingBottom:"1px"}}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <div className='text-4xl text-white ml-20' >helpEd</div>
    <div style={{ textAlign: 'center', flex: '5' }}>
  {locations.length > 0 && (
   <select
   value={selectedLocationId || ''}
   onChange={handleLocationChange}
   style={{
     color: 'white',
     backgroundColor: 'transparent',
     padding: '5px',
     borderRadius: '5px',
     border: '1px solid #ccc',
     transition: 'background-color 0.3s',
     cursor:'pointer'
   }}
   onMouseEnter={(e) => {
     const target = e.target as HTMLSelectElement;
     target.style.backgroundColor = 'rgba(9, 181, 235, 1)'; 
   }}
   onMouseLeave={(e) => {
     const target = e.target as HTMLSelectElement; 
     target.style.backgroundColor = 'transparent';
   }}
   onFocus={(e) => {
     const target = e.target as HTMLSelectElement;
     target.style.backgroundColor = 'rgba(9, 181, 235, 0.3)'; 
   }}
   onBlur={(e) => {
     const target = e.target as HTMLSelectElement; 
     target.style.backgroundColor = 'transparent';
   }}
 >
   <option value="" disabled hidden style={{ color: 'blue' }}>Location</option>
   {locations.map((location) => (
     <option key={location.locationId} value={location.locationId}>
       {location.locationName}
     </option>
   ))}
 </select>
 
  )}
</div>



    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: '1' }}>
    <button
  onClick={openModal}
  className='mr-12 text-white'
  style={{
    transition: 'background-color 0.3s, padding 0.3s',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '5px 10px',
    border: 'none',
  }}
  onMouseEnter={(e) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; 
    ; 
  }}
  onMouseLeave={(e) => {
    const target = e.target as HTMLButtonElement; 
    target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    target.style.padding = '5px 10px';
  }}
>
  +
</button>
      <SignOutButton />
    </div>
    </div>
  


      <AddStudentModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        studentName={studentName}
        setStudentName={setStudentName}
        locationName={locationName}
        setLocationName={setLocationName}
        age={age}
        setAge={setAge}
        level={level}
        setLevel={setLevel}
      />
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' ,marginLeft:24, marginRight:24 }}>
  {students.map((student: { studentId: string; name: string; age: number; level:number }, index: number) => (
    <div key={student.studentId} className="student-card" style={{ width: '200px', height: '400px', margin: '10px', border: '2px solid black',borderRadius:"5%", boxShadow:"3px 3px 3px black",display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 0 20%', position: 'relative' }}>
     <button className="edit-button" style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none' }}
       onClick={() => openEditModal(student.studentId)}
>
  <FaEdit />
</button>
      <img src="https://via.placeholder.com/150"className="border-gradient" alt="Placeholder" style={{ width: '150px', height: '150px', borderRadius: '50%',boxShadow:"1px 3px black", border:"5px solid rgba(9, 181, 235, 0.6)", marginBottom: 25 }} />
      <p>
        <span className="label" style={{ margin: 0 }}>Name:</span>
        <span className="value" style={{ borderBottom: "2px dotted black", marginLeft: 20 }}>{student.name}</span>
      </p>
      <p>
        <span className="label" style={{ margin: 0 }}>Age:</span>
        <span className="value" style={{ marginLeft: 33, borderBottom: "2px dotted black" }}>{student.age}</span>
      </p>
      <p>
        <span className="label" style={{ margin: 0 }}>Level:</span>
        <span className="value" style={{ marginLeft: 33, borderBottom: "2px dotted black" }}>{student.level}</span>
      </p>
    </div>
  )).reduce((rows, current, index) => {
    const row = Math.floor(index / 4);
    rows[row] = rows[row] || [];
    rows[row].push(current);
    return rows;
  }, []).map(row => <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>{row}</div>)}
</div>


<EditStudentModal
  isOpen={isEditModalOpen}
  closeModal={closeEditModal}
  handleSubmit={handleEditSubmit}
  studentName={studentName}
  setStudentName={setStudentName}
  age={age}
  setAge={setAge}
  level={level}
  setLevel={setLevel}
/>



</div>



  );
  
};

export default Page;
