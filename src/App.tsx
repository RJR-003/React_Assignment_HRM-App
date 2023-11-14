import { RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import router from "./core/routing/Router";
import EmployeeProvider from "./core/context/EmployeeLIstContext";

function App() {
  return (
    <Layout>
      <EmployeeProvider>
        <RouterProvider router={router}></RouterProvider>
      </EmployeeProvider>
    </Layout>
  );
}

export default App;
