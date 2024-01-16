import { useDebounce } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { LoadingSvg, SearchSvg } from '../../assets/websiteSvg';
import PropTypes from 'prop-types';

const Search = ({
  name,
  className,
  setSearch,
  loading = false,
  loadingIcon = "eye",
  placeholder = "Search here",
}) => {

  const [initialValue, setInitialValue] = useState("")
  const debouncedSearchTerm = useDebounce(initialValue, 700);

  useEffect(() => {
    setSearch ? setSearch(debouncedSearchTerm) : null
  }, [debouncedSearchTerm, setSearch])

  const returnValue = (name, value) => {
    setInitialValue(pre => ({ ...pre, [name]: value?.trim() }))
  }
  return (
    <div className={twMerge("items-center flex w-full h-full  ", className)}>
      <div className="relative z-0 w-full ">
        <div className="absolute inset-0 z-10 w-4 h-4 m-auto ml-4 text-black">
          <SearchSvg />
        </div>
        {loading && <div className="">
          {loadingIcon == "eye" ? <div className="absolute z-10 m-auto ml-4 text-black right-[30px] top-[12px]"><span className="eye_Loading"></span> </div> :
            <div className="absolute z-10 m-auto ml-4 text-black right-[20px] top-[5px]">
              <LoadingSvg />
            </div>}
        </div>}
        <input name={name}
          className={`w-full border rounded-md dark:bg-gray-800 dark-border-gray-800  pl-10 pr-2  py-1 font-poppins text-[18px] font-normal text-gray-400  focus:outline-none `}
          type="search" placeholder={placeholder}
          onChange={(e) => (returnValue(name, e.target.value))} />
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  setSearch: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
  loadingIcon: PropTypes.string,
};
Search.displayName = "Search"

export default Search;