import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
};

export default DashboardLayout;
