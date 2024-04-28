import AdminDashboard from "pages/Admin/AdminDashboard";
import Login from "pages/Admin/Auth/Login";
import Register from "pages/Admin/Auth/Register";
import { IRoute } from "types/route";

export const publicRoutes: IRoute[] = [
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
];
export const privateAdminRoutes: IRoute[] = [
  {
    path: "/AdminDashboard",
    element: <AdminDashboard />,
  },
];

export const getRoutes = (role: string | null) => {
  switch (role) {
    case "admin":
      return privateAdminRoutes;
    case "user":
      return [];
    default:
      return [];
  }
};
