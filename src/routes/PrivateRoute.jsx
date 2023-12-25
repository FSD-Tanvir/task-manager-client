/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader";
import useAuth from "../components/hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()

  // we have to wait here
  if (loading) return <Loader />;
  //

  if (!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
};

export default PrivateRoute;
