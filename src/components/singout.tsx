// SignOutButton component
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignOutButton: React.FC = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false, callbackUrl: '/' });
    router.push('/'); // Redirect to the home page after signing out
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-xl text-white"
      style={{
        color: 'white',
      backgroundColor: '#000',
      padding: '10px 20px',
      border: 'none',
      marginTop: "2rem",
      fontSize: "1.5rem",
      display: 'flex',
      justifyContent: 'center',
      width: '200px',
      borderRadius: '10px', 
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
      Sign Out
    </button>
  );
};

export default SignOutButton;
