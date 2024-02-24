import { useRouter } from 'next/navigation';


const HomeButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push('/homePage');
  };

  return (
    <button
      onClick={handleSignOut}
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
      Home
    </button>
  );
};

export default HomeButton;