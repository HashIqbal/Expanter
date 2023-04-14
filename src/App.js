import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IntroPage from "./pages/intro";
import FeaturesPage from "./pages/features";
import CreateAccount from "./pages/createAccount";
import BussInfo from "./pages/bussInfo";
import LoginPage from "./pages/loginPage";
import ServiceProvider from "./pages/serviceProvider";
import BrandProfile from "./pages/brandProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
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
    element: <LoginPage />,
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
