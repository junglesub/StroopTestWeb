import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin";
import MainPage from "./MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
