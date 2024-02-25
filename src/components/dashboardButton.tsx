// HomeButton component
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const HomeButton = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSesssion = async () => {
    router.push('/dashboard');
  };

  // Render button only if session exists
  if (session) {
    return (
      <button
        onClick={handleSesssion}
        style={{
          color: 'black',
          backgroundColor: 'rgba(0,0,0,0.1)',
          padding: '10px 20px',
          border: 'none',
          marginTop: '2rem',
          fontSize: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          width: '200px',
          borderRadius: '10px',
          fontWeight: 'bold',
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'rgba(0,0,0,0.1)';
          target.style.padding = '10px 20px';
        }}
      >
        Dashboard
      </button>
    );
  }

  // Render nothing if session doesn't exist
  return null;
};

export default HomeButton;
