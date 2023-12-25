import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
      <Toaster/>
    </div>
  );
};

export default Root;
