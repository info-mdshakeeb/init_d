
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";


import { useSidebarContext } from "../hooks/SidebarProvider";
import Search from "../components/share/Search";
import { Logout } from "../components/share/Logout";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../redux/features/utils/utilsSlice";



const TopNav = () => {
  const dispatch = useDispatch()
  const { drawer } = useSelector(state => state.utils)
  const { toggle } = useSidebarContext();
  return (
    <nav
      className={`flex h-16 items-center justify-end bg-primary shadow lg:h-24 lg:items-stretch lg:justify-between w-full   px-4`}
    >
      <div className="items-center hidden w-full px-4 lg:flex ">
        <Search />
        <div className="justify-end hidden w-full max-w-xs gap-4 lg:flex">
          <div className="flex items-center justify-between gap-4 max-h-[50px]">
            <div className="flex items-center justify-start gap-1 cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5165 2.9248C7.75816 2.9248 5.5165 5.16647 5.5165 7.9248V10.3331C5.5165 10.8415 5.29983 11.6165 5.0415 12.0498L4.08316 13.6415C3.4915 14.6248 3.89983 15.7165 4.98316 16.0831C8.57483 17.2831 12.4498 17.2831 16.0415 16.0831C17.0498 15.7498 17.4915 14.5581 16.9415 13.6415L15.9832 12.0498C15.7332 11.6165 15.5165 10.8415 15.5165 10.3331V7.9248C15.5165 5.1748 13.2665 2.9248 10.5165 2.9248Z"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M12.0584 3.16621C11.8001 3.09121 11.5334 3.03288 11.2584 2.99954C10.4584 2.89954 9.69176 2.95788 8.9751 3.16621C9.21676 2.54954 9.81676 2.11621 10.5168 2.11621C11.2168 2.11621 11.8168 2.54954 12.0584 3.16621Z"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.0166 16.3838C13.0166 17.7588 11.8916 18.8838 10.5166 18.8838C9.83327 18.8838 9.19993 18.6005 8.74993 18.1505C8.29993 17.7005 8.0166 17.0671 8.0166 16.3838"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>


            </div>
            <div className="flex items-center justify-center">
              <div>
                Logo
                {/* <img src={menImg} className="w-12 h-12 rounded-full object-cover mr-[16px]" alt="" /> */}
              </div>
              <div className="text-white">
                <span className="text-lg font-semibold font-inter">Admin</span>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0}
                className="flex items-center text-white cursor-pointer select-none" >
                <MdKeyboardArrowDown size={24} />
              </label>
              <ul tabIndex={0}
                className="menu dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Logout>
                    <button className="text-[16px] font-medium font-manrope flex items-center gap-2">
                      <FiArrowLeftCircle size={16} className="text-gray-600" />
                      Sign out
                    </button>
                  </Logout>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  Mobile View */}
      <div className="relative visible w-full px-4 text-gray-600 lg:hidden">
        <div className="flex items-center justify-between w-full">
          <div>
            {/* <BrandIcon className="text-white"/> */}
            <h1 className="text-lg font-semibold text-white font-poppins">Last News BD</h1>
          </div>
          <div
            onClick={toggle}
            className="">

            <label htmlFor="my-drawer-2" className={"  px-4 py-2 w-full text-[16px] font-[600] uppercase text-center"}>
              <svg
                onClick={() => dispatch(openDrawer(!drawer))}
                aria-label="Main Menu"
                aria-haspopup="true"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer icon icon-tabler icon-tabler-menu"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </label>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
