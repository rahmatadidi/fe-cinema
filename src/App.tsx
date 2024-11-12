import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import PrivateRoute from "./routes/private-routes";
import FormTicket from "./pages/form-ticket-page";
import HomePage from "./pages/home-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/form" element={<FormTicket />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
