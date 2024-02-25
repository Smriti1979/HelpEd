// HomeButton component
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const HomeButton = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    router.push('/homePage');
  };

  // Render button only if session exists
  if (session) {
    return (
      <button
        onClick={handleSignOut}
        style={{
          marginRight:'5rem',
          color: 'black',
          backgroundColor: 'rgba(0,0,0,0.1)',
          padding: '10px 20px',
          border: 'none',
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
        Home
      </button>
    );
  }

  // Render nothing if session doesn't exist
  return null;
};

export default HomeButton;
