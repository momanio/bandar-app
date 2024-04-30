import UsersTable from "components/Admin/Dashboard/UsersTable";
import Trainees from "components/Admin/Trainees/Trainees";
import Training from "components/Admin/Training/Training";

import Nutrition from "components/Admin/nutrition/Nutrition";

import AdminDashboard from "pages/Admin/AdminDashboard";
import Login from "pages/Admin/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "utils/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    path: "/client/login",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UsersTable />,
      },
      {
        path: "nutrition",
        element: <Nutrition />,
      },
      {
        path: "training",
        element: <Training />,
      },
      {
        path: "trainees",
        element: <Trainees />,
      },
    ],
  },
]);
