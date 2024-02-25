// SignOutButton component
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const pathwayButton: React.FC = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    
    router.push('/pathways'); 
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-xl text-white mr-12"
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
      Pathways
    </button>
  );
};

export default pathwayButton;
