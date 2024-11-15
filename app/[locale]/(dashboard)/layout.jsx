"use client";

import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";
import { useAuthCheck } from "../Components/hooks/useAuthCheck";
import LoadingSpinner from "../Components/Spinner";
import { SUSE } from 'next/font/google';

const suse = SUSE({
  weight: ['400', '700'],
  subsets: ['latin'],
});


const Layout = ({ children }) => {
  const loading = useAuthCheck();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={suse.className}>
      <Navbar />
      <main className="bg-[#E5E5E5] pt-16 flex flex-col justify-center items-center dark:bg-[#14213D] relative min-h-[90vh]">
      
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
