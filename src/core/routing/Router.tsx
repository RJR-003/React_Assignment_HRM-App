import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import EmpDetails from "../../pages/emp_Details/EmpDetails";
import AddUpdateEmp from "../../pages/add_Update_Emp/AddUpdateEmp";
import Layout from "../../layout/Layout";
import ErrorPage from "../../pages/errorPage/ErrorPage";

const router = createBrowserRouter(
  [
    {
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/view-employee/:id", element: <EmpDetails /> },
        { path: "/add-employee", element: <AddUpdateEmp /> },
        { path: "/update-employee/:id", element: <AddUpdateEmp /> },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/React_Assignment_HRM-App/" }
);

export default router;
