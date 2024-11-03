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
      <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center dark:bg-slate-600">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
