import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/@common/NotFound";
import Projects from "./components/projects/Projects";
import { Layout } from "./components/@common/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<NotFound />} />
        <Route path="/projects" element={<Projects />} errorElement={<NotFound />} />
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </Layout>
  );
}

export default App;
