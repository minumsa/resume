import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NotFound from "./components/@common/NotFound";
import Projects from "./components/projects/Projects";
import { Layout } from "./components/@common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
