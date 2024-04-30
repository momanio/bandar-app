import { Navigate } from "react-router-dom";
import { checkUserAuthentication } from "./authenticate";

export function PrivateRoute({ children }: { children: any }) {
  const isAuthenticated = checkUserAuthentication();
  return isAuthenticated ? children : <Navigate to="/" />;
}
