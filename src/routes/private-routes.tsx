import FormTicket from "@/pages/form-ticket-page";
import { Navigate } from "react-router-dom";

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
