import { DashboardMenuProps } from "types";
import { v4 as uuid } from "uuid";

/**
 * All Dashboard Routes
 *
 * Understanding name/value pairs for Dashboard routes
 *
 * Applicable for main/root/level 1 routes
 * icon        : string - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 * Applicable for main/root/level 1 and subitems routes
 * id          : string - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 * title       : string - If menu contains children use title to provide main menu name.
 * badge       : string - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * badgecolor  : string - (Optional - Default - 'primary') - Used to specify badge background color.
 *
 * Applicable for subitems / children items routes
 * name        : string - If it's a menu item in which you are specifying a link, use name (don't use title for that).
 * children     : Array - Use to specify submenu items.
 *
 * Used to segregate menu groups
 * grouptitle  : boolean - (Optional - Default - false) If you want to group menu items you can use grouptitle = true,
 * (Use title: value to specify group title e.g. COMPONENTS, DOCUMENTATION that we did here.)
 */

export const DashboardMenu: DashboardMenuProps[] = [
  {
    id: uuid(),
    title: "Dashboard",
    icon: "home",
    link: "/",
  },
  {
    id: uuid(),
    title: "LAYOUTS & PAGES",
    grouptitle: true,
  },
  {
    id: uuid(),
    title: "Pages",
    icon: "layers",
    children: [
      { id: uuid(), link: "/pages/profile", name: "Profile" },
      { id: uuid(), link: "/pages/settings", name: "Settings" },
      { id: uuid(), link: "/pages/billing", name: "Billing" },
      { id: uuid(), link: "/pages/pricing", name: "Pricing" },
      { id: uuid(), link: "/not-found", name: "404 Error" },
    ],
  },
  {
    id: uuid(),
    title: "Authentication",
    icon: "lock",
    children: [
      { id: uuid(), link: "/auth/sign-in", name: "Sign In" },
      { id: uuid(), link: "/auth/sign-up", name: "Sign Up" },
      {
        id: uuid(),
        link: "/auth/forget-password",
        name: "Forget Password",
      },
    ],
  },
  {
    id: uuid(),
    title: "Layouts",
    icon: "layout",
    link: "/layout-vertical",
  },
  {
    id: uuid(),
    title: "UI COMPONENTS",
    grouptitle: true,
  },
  {
    id: uuid(),
    title: "Components",
    icon: "monitor",
    children: [
      { id: uuid(), link: "/components/accordions", name: "Accordions" },
      { id: uuid(), link: "/components/alerts", name: "Alerts" },
      { id: uuid(), link: "/components/badges", name: "Badges" },
      { id: uuid(), link: "/components/breadcrumbs", name: "Breadcrumbs" },
      { id: uuid(), link: "/components/buttons", name: "Buttons" },
      { id: uuid(), link: "/components/button-group", name: "ButtonGroup" },
      { id: uuid(), link: "/components/cards", name: "Cards" },
      { id: uuid(), link: "/components/carousels", name: "Carousel" },
      { id: uuid(), link: "/components/close-button", name: "Close Button" },
      { id: uuid(), link: "/components/collapse", name: "Collapse" },
      { id: uuid(), link: "/components/dropdowns", name: "Dropdowns" },
      { id: uuid(), link: "/components/list-group", name: "Listgroup" },
      { id: uuid(), link: "/components/modal", name: "Modal" },
      { id: uuid(), link: "/components/navs", name: "Navs" },
      { id: uuid(), link: "/components/navbar", name: "Navbar" },
      { id: uuid(), link: "/components/offcanvas", name: "Offcanvas" },
      { id: uuid(), link: "/components/overlays", name: "Overlays" },
      { id: uuid(), link: "/components/pagination", name: "Pagination" },
      { id: uuid(), link: "/components/popovers", name: "Popovers" },
      { id: uuid(), link: "/components/progress", name: "Progress" },
      { id: uuid(), link: "/components/spinners", name: "Spinners" },
      { id: uuid(), link: "/components/tables", name: "Tables" },
      { id: uuid(), link: "/components/toasts", name: "Toasts" },
      { id: uuid(), link: "/components/tooltips", name: "Tooltips" },
    ],
  },
  {
    id: uuid(),
    title: "Menu Level",
    icon: "corner-left-down",
    children: [
      {
        id: uuid(),
        link: "#",
        title: "Two Level",
        children: [
          { id: uuid(), link: "#", name: "NavItem 1" },
          { id: uuid(), link: "#", name: "NavItem 2" },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Three Level",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "NavItem 1",
            children: [
              { id: uuid(), link: "#", name: "NavChildItem 1" },
              { id: uuid(), link: "#", name: "NavChildItem 2" },
            ],
          },
          { id: uuid(), link: "#", name: "NavItem 2" },
        ],
      },
    ],
  },
  {
    id: uuid(),
    title: "Documentation",
    grouptitle: true,
  },
  {
    id: uuid(),
    title: "Docs",
    icon: "clipboard",
    link: "/documentation",
  },
  {
    id: uuid(),
    title: "Changelog",
    icon: "git-pull-request",
    link: "/changelog",
  },
  {
    id: uuid(),
    title: "Free Download",
    icon: "download",
    link: "https://dashui.codescandy.com/free-reactjs-admin-dashboard-template.html",
  },
];
