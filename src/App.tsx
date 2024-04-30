import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { useEffect } from "react";
import ApiService from "./services/api";
function App() {
  useEffect(() => {
    ApiService.init();
  });
  return <RouterProvider router={router} />;
}

export default App;
