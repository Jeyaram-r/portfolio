
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "../modules/home";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/portfolio" />} />
      <Route path="/portfolio" element={<Home />} />
    </Routes>
  );
}