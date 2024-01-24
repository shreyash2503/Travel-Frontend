import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../store/store";

export const PrivateRoutes = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  console.log(user);
  return user?.token ? <Outlet /> : <Navigate to="/login" />;
};
