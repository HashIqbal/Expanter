import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FeaturesPage from "./pages/home/features";
import CreateAccount from "./pages/forms/createAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FeaturesPage />,
  },
  {
    path: "/create/:id",
    element: <CreateAccount />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
