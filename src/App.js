import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "./pages/home/start";
import FeaturesPage from "./pages/home/features";
import CreateAccount from "./pages/forms/createAccount";
import BussInfo from "./pages/profileFill/bussInfo";
import Login from "./pages/forms/login";
import ServiceProvider from "./pages/profileFill/serviceProvider";
import BrandProfile from "./pages/profileView/brandProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/create/:id",
    element: <CreateAccount />,
  },
  {
    path: "/bussinfo",
    element: <BussInfo />,
  },
  {
    path: "/loginPage",
    element: <Login />,
  },
  {
    path: "/serviceProvider",
    element: <ServiceProvider />,
  },
  {
    path: "/brandprofile",
    element: <BrandProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
