import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";


export default function PrimaryLayout() {

  return (
    <div className="flex flex-col max-h-screen ">
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div className="">
          <Sidebar />
        </div>
        <div className="overflow-x-hidden">
          <div className="sticky top-0 z-10 ">
            <TopNav />
          </div>
          <div className="">
            <Outlet />

          </div>
        </div>
      </div>
    </div>
  );
}
