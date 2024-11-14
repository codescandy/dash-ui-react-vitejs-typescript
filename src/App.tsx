//import node module libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import routes files
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
import Documentation from "pages/dashboard/Documentation";
import ChangeLog from "pages/dashboard/Changelog";
import ApiDemo from "./pages/dashboard/pages/ApiDemo";

// import bootstrap components
import Accordion from "bootstrap-components/Accordions";
import Alerts from "bootstrap-components/Alerts";
import Badges from "bootstrap-components/Badges";
import Breadcrumbs from "bootstrap-components/Breadcrumbs";
import ButtonGroup from "bootstrap-components/ButtonGroup";
import Buttons from "bootstrap-components/Buttons";
import Cards from "bootstrap-components/Cards";
import Carousels from "bootstrap-components/Carousels";
import CloseButtons from "bootstrap-components/CloseButton";
import Collapses from "bootstrap-components/Collapse";
import Dropdowns from "bootstrap-components/Dropdowns";
import Listgroups from "bootstrap-components/ListGroup";
import Modals from "bootstrap-components/Modals";
import Navbars from "bootstrap-components/Navbars";
import Navs from "bootstrap-components/Navs";
import Offcanvas from "bootstrap-components/Offcanvas";
import Overlays from "bootstrap-components/Overlays";
import Paginations from "bootstrap-components/Paginations";
import Popovers from "bootstrap-components/Popovers";
import Progress from "bootstrap-components/Progress";
import Spinners from "bootstrap-components/Spinners";
import Toasts from "bootstrap-components/Toasts";
import Tooltips from "bootstrap-components/Tooltips";
import Tables from "bootstrap-components/Tables";

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
            {
              path: "api-demo",
              Component: ApiDemo,
            },
          ],
        },
        {
          id: "documentation",
          path: "/documentation",
          Component: Documentation,
        },
        {
          id: "changelog",
          path: "/changelog",
          Component: ChangeLog,
        },
        {
          id: "layout-vertical",
          path: "/layout-vertical",
          Component: LayoutVertical,
        },
        {
          id: "components",
          path: "/components",
          children: [
            { path: "accordions", Component: Accordion },
            { path: "alerts", Component: Alerts },
            { path: "badges", Component: Badges },
            { path: "breadcrumbs", Component: Breadcrumbs },
            { path: "button-group", Component: ButtonGroup },
            { path: "buttons", Component: Buttons },
            { path: "cards", Component: Cards },
            { path: "carousels", Component: Carousels },
            { path: "close-button", Component: CloseButtons },
            { path: "collapse", Component: Collapses },
            { path: "dropdowns", Component: Dropdowns },
            { path: "list-group", Component: Listgroups },
            { path: "modal", Component: Modals },
            { path: "navbar", Component: Navbars },
            { path: "navs", Component: Navs },
            { path: "offcanvas", Component: Offcanvas },
            { path: "overlays", Component: Overlays },
            { path: "pagination", Component: Paginations },
            { path: "popovers", Component: Popovers },
            { path: "progress", Component: Progress },
            { path: "spinners", Component: Spinners },
            { path: "tables", Component: Tables },
            { path: "toasts", Component: Toasts },
            { path: "tooltips", Component: Tooltips },
          ],
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
