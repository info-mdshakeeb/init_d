const TableActionDropdown = ({ data, actionData, }) => {
  return (
    <div className={`relative w-full h-full `}>
      <div className="dropdown dropdown-left">
        <label tabIndex={0} className="flex items-center justify-center text-2xl cursor-pointer">
          ...
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 -mt-10">
          {actionData?.map((item, i) => (
            <li key={i}>
              <a
                onClick={() => item?.fn(data)}
                className="flex items-center gap-2">
                {/* {item.icon} */}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableActionDropdown;