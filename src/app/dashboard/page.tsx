import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SignOutButton from "../../components/singout"
const page =async () => {
    const session=await getServerSession()
    if(!session){
        redirect("/")
    }
  return (
  
    <div>
        <SignOutButton/>
  </div>
  
  )
}

export default page