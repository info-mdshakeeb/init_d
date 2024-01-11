
import Search from "../components/share/Search";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useSidebarContext } from "../hooks/SidebarProvider";
import { Logout } from "../components/share/Logout";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../redux/features/utils/utilsSlice";
import { useEffect, useRef, useState } from "react";



const TopNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => { setIsOpen(!isOpen); }

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const dispatch = useDispatch()
  const { drawer } = useSelector(state => state.utils)
  const { toggle } = useSidebarContext();
  return (
    <nav
      className={`flex h-16 items-center justify-end bg-primary shadow lg:h-24 lg:items-stretch lg:justify-between w-full px-4`}>
      <div className="items-center hidden w-full px-4 lg:flex ">
        <Search text={"Search here"} />
        <div className="justify-end hidden w-full max-w-xs gap-4 lg:flex">
          <div className="flex items-center justify-between gap-4 max-h-[50px]">

            <div className="flex items-center justify-center">
              <div className="pr-4 text-white">
                icon
                {/* <img src={menImg} className="w-12 h-12 rounded-full object-cover mr-[16px]" alt="" /> */}
              </div>
              <div ref={dropdownRef} className="relative inline-block text-right">
                <div className="text-white">
                  <span onClick={toggleDropdown} type="button" className="text-lg font-semibold cursor-pointer font-inter">Admin</span>
                </div>
                {isOpen && (
                  <div className="absolute right-0 flex flex-col items-center justify-center w-32 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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
                )}
              </div>
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
