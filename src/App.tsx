import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { getRoutes, publicRoutes } from "./routes/Admin/routes";
import "./App.css";
import { useEffect, useState } from "react";
import { isLoggedIn } from "services/Admin/authService";
import ApiService from "./services/api";
import { IRoute } from "types/route";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [privateRoutes, setPrivateRoutes] = useState<
    IRoute[] | string | undefined
  >([]);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/Login");
    } else {
      ApiService.init();
    }
  }, [navigate]);

  useEffect(() => {
    if (isLoggedIn()) {
      setPrivateRoutes(getRoutes(localStorage.getItem("user-role")));
    }
  }, [location.pathname]);

  return (
    <Routes>
      {publicRoutes.map((item) => (
        <Route key={item.path} element={item.element} path={item.path} />
      ))}
      {(privateRoutes as IRoute[]).map((item: IRoute) => (
        <Route key={item.path} element={item.element} path={item.path} />
      ))}
      <Route path="*" element={<Navigate to="/Login" replace />} />
    </Routes>
  );
}

export default App;
