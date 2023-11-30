import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import EmployeeProvider from "../core/context/EmployeeLIstContext";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <>
      <EmployeeProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </EmployeeProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
