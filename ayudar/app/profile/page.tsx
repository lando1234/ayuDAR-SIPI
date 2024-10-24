'use client';  // Añadir esta línea para que el componente sea un Client Component
import { useRouter } from 'next/navigation';
import React from 'react'

const MyProfile = () => {
  const router = useRouter();
  const session = sessionStorage.getItem('session');
  if (session){
    return (
      <div>MyProfile</div>
    )
  }
  else {
    router.push('/login');
  }

}

export default MyProfile