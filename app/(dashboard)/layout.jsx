'use client';

import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";
import LoadingSpinner from "../Components/Spinner";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
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