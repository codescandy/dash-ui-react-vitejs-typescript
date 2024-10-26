import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationLayout from "layouts/AuthenticationLayout";
import RootLayout from "layouts/RootLayout";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "pages/auth/ForgetPassword";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "pages/dashboard/Index";
import Billing from "pages/dashboard/pages/Billing";
import Pricing from "pages/dashboard/pages/Pricing";
import Settings from "pages/dashboard/pages/Settings";
import Profile from "pages/dashboard/pages/Profile";
import NotFound from "pages/dashboard/pages/NotFound";
import LayoutVertical from "pages/dashboard/LayoutVertical";

const App = () => {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      Component: RootLayout,
      errorElement: <NotFound />,
      children: [
        {
          id: "dashboard",
          path: "/",
          Component: Dashboard,
        },
        {
          id: "pages",
          path: "/pages",
          children: [
            {
              path: "profile",
              Component: Profile,
            },
            {
              path: "settings",
              Component: Settings,
            },
            {
              path: "billing",
              Component: Billing,
            },
            {
              path: "pricing",
              Component: Pricing,
            },
          ],
        },
        {
          id: "layout-vertical",
          path: "/layout-vertical",
          Component: LayoutVertical,
        },
      ],
    },
    {
      id: "auth",
      path: "/auth",
      Component: AuthenticationLayout,
      children: [
        {
          id: "sign-in",
          path: "sign-in",
          Component: SignIn,
        },
        {
          id: "sign-up",
          path: "sign-up",
          Component: SignUp,
        },
        {
          id: "forget-password",
          path: "forget-password",
          Component: ForgetPassword,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
