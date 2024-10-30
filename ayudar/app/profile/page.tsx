"use client"; // Añadir esta línea para que el componente sea un Client Component
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MyProfile = () => {
  const router = useRouter();
  useEffect(() => {
    const session = sessionStorage.getItem("session");
    if (!session) {
      router.push("/login");
    }
  }, [router]);
  return <div>MyProfile</div>;
};

export default MyProfile;
