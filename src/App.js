import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FeaturesPage from "./pages/home/features";
import CreateAccount from "./pages/forms/createAccount";
import Login from "./pages/forms/login";
import Trial from "./HTTP/trial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeaturesPage />,
  },
  {
    path: "/create/:id",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/trial",
  //   element: <Trial />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
