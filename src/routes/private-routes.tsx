import FormTicket from "@/pages/form-ticket-page";
import HomePage from "@/pages/home-page";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

const PrivateRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return <FormTicket />;
};

export default PrivateRoute;
