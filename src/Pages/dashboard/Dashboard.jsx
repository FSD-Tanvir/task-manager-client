import { MdManageHistory } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-purple-900 p-4 text-white ">
        <div className="flex justify-center items-center border-b  ">
          <Link
            to="/"
            className="text-2xl font-bold text-white mb-4 content-center"
          >
            Task Tracker
          </Link>
        </div>
        <div className="flex flex-col items-center py-3 gap-3  border-b justify-center">
          <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
          <h2>{user?.displayName}</h2>
          <div>
            <button onClick={handleLogout} className="flex gap-2 items-center">
              Logout <BiSolidLogOut />
            </button>
          </div>
        </div>
        <ul className="menu">
          <NavLink
            to="/task-board"
            className="flex gap-2 items-center justify-center"
          >
            <MdManageHistory />
            Manage Task
          </NavLink>
        </ul>
      </div>
      {/* main content */}
      <div className="lg:w-3/4 p-4">
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
