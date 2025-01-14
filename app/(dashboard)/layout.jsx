'use client';

import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";
import LoadingSpinner from "../Components/Spinner";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Menu from "../Components/Menu";

const Layout = ({ children }) => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push(`http://localhost:3000/api/auth/login`)
    }
  }, [isLoading, user, router]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Navbar />
    
      {children}
      <Footer />
    </>
  );
};

export default Layout;