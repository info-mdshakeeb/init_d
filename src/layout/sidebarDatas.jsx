
import {
  AgentIcon,
  DashboardIcon,
  RechargeHistoryIcon,
  SettingIcon,
  UserIcon,
} from "../assets/SideNavigationIcons.jsx";

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

];
