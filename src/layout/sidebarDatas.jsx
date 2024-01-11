
import { DashboardIcon, UserIcon } from "../assets/SideNavigationIcons.jsx";

export const sidebarDatas = [
  {
    id: 13123,
    title: "MENU",
    mainMenus: [
      {
        id: 11,
        name: "Dashboard",
        url: "/",
        icon: (
          <DashboardIcon className="focus:stroke-white active:stroke-white group-hover:stroke-white" />
        ),
        submenu: [],
      },
    ],
  },
  {
    id: 23232224,
    title: "SOCIAL MANAGEMENT",
    mainMenus: [
      {
        id: 121,
        name: "User Management",
        url: "/user/user_management",
        icon: (
          <UserIcon className="focus:stroke-white active:stroke-white group-hover:stroke-white" />
        ),
        submenu: [],
      },

    ]
  },

];
