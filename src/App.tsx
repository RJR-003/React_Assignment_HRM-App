import { RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import router from "./core/routing/Router";

function App() {
  return (
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  );
}

export default App;
