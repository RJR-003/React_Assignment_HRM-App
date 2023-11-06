import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import EmpDetails from "../../pages/emp_Details/EmpDetails";
import AddUpdateEmp from "../../pages/add_Update_Emp/AddUpdateEmp";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/view-employee", element: <EmpDetails /> },
    { path: "/add-update-employee", element: <AddUpdateEmp /> },
  ],
  { basename: import.meta.env.DEV ? "/" : "/React_Assignment_HRM-App/" }
);

export default router;
