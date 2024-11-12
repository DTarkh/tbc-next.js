"use client";

import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer";
import { useAuthCheck } from "../Components/hooks/useAuthCheck";
import LoadingSpinner from "../Components/Spinner";


const Layout = ({ children }) => {
  const loading = useAuthCheck();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar />
      <main className="bg-amber-300 min-h-[78vh] flex flex-col justify-center items-center dark:bg-slate-600 relative">
      
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
