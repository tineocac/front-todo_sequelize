import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { PublicRoutes } from "../routes/routes";
const AuthGuard = () => {
  const auth = useAuth();
  console.log(auth);
  return auth.user ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
