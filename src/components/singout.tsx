"use client"
import { signOut, useSession } from 'next-auth/react';

const SignOutButton: React.FC = () => {
 const {data:session}:any=useSession();
  const handleSignOut = async () => {
    await signOut();
  };

 

  return (
    <div>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  );
};

export default SignOutButton;
