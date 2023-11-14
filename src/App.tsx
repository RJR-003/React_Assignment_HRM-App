import { RouterProvider } from "react-router-dom";
import router from "./core/routing/Router";
import EmployeeProvider from "./core/context/EmployeeLIstContext";

function App() {
  return (
    <EmployeeProvider>
      <RouterProvider router={router}></RouterProvider>
    </EmployeeProvider>
  );
}

export default App;
