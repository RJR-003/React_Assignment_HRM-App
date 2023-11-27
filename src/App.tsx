import { RouterProvider } from "react-router-dom";
import router from "./core/routing/Router";
import EmployeeProvider from "./core/context/EmployeeLIstContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <EmployeeProvider>
      <RouterProvider router={router}></RouterProvider>
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
    </EmployeeProvider>
  );
}

export default App;
