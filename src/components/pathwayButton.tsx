import Link from 'next/link';

const PathwayButton: React.FC = () => {
  return (
    <Link href="/pathways">
      <p className="text-xl text-white mr-12"
        style={{
          transition: 'background-color 0.3s, padding 0.3s',
          color: 'black',
          backgroundColor: 'rgba(0,0,0,0.1)',
          padding: '10px 20px',
          border: 'none',
          marginTop: "2rem",
          fontSize: "1.5rem",
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
          target.style.backgroundColor = '#rgba(0,0,0,0.1)';
          target.style.padding = '10px 20px';
        }}
      >
        Pathways
      </p>
    </Link>
  );
};

export default PathwayButton;
