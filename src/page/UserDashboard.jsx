import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../redux/features/user/userApi";
import { showModal } from "../redux/features/modals/modalSlices";
import DeleteCompo from "../components/modalComponents/DeleteCompo";
import AddMember from "../components/modalComponents/AddMember";
import Search from "../components/share/Search";
import StageLoading from "../components/share/loading/StageLoading";
import TableTemp from "../components/TableTemp";
import Paginate from "../components/Paginate";
import Modal from "../components/share/Modals/Modal";


const UserDashBoard = () => {
  const dispatch = useDispatch();
  // local state
  const [role, setRole] = useState("");
  const [modalContent, setModalContent] = useState();
  const [search, setSearch] = useState("");
  const [paginateData, setPaginateData] = useState(1);

  // load data
  const queries = `deleted=0&role=${role}&search=${search?.users || ""}&page=${paginateData}&perpage=${10}`;
  const { data: userData, isLoading, isError, error, isSuccess, isFetching } = useGetUserQuery(queries, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 300000,
  });

  //  functions paginate and filters
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole === "Select All") { setRole(""); } else { setRole(selectedRole); }
  };
  const handlePaginate = (data) => {
    let selected = data.selected;
    if (selected === 0) return setPaginateData(1);
    setPaginateData(selected + 1);
  }

  // modal functions
  const handleAddMember = () => {
    setModalContent(null);
    dispatch(showModal({ show: true, title: "Add Member", width: "max-w-lg", }));
    setModalContent(<AddMember />);
  };
  const handleUpdateUser = (data) => {
    setModalContent(null);
    dispatch(showModal({ show: true, title: "Edit Member", width: "max-w-lg", selectedItem: data }));
    setModalContent(<AddMember />);
  };
  const handleDeleteUser = (item) => {
    setModalContent(null);
    dispatch(showModal({ show: true, title: "Delete News", width: "max-w-lg", selectedItem: { name: item.username, ...item } }));
    setModalContent(<DeleteCompo type={"userDelete"} page={setPaginateData} />);
  };

  // table  require data
  const tableHead = [
    { name: 'Photo', field: 'profile_img', },
    { name: 'Username', field: 'username', },
    { name: 'Email Address', field: 'email', },
    { name: 'role', field: 'role', },
    { name: 'Joining Time', field: 'created_at', },
  ];
  const fieldsToShow = ['profile_img', 'username', 'email', 'role', 'created_at',];

  const ActionData = [
    { name: "Edit", fn: handleUpdateUser },
    { name: "Delete", fn: handleDeleteUser },
  ]

  return (
    <div className="flex flex-col w-full px-4 mx-auto md:px-8">
      <div className="">
      </div>
      <div className="">
        <div className="flex flex-col items-end w-full gap-4 mt-5 md:justify-end md:flex-row ">
          <Search className={"max-w-xs"} text={"search by name"} name={"users"} setSearch={setSearch} />
          <div className="flex gap-2 ">
            <select className={`p-[6px] mt-[2px] border cursor-default select-none focus:outline-none rounded-[4px]`}
              onChange={handleRoleChange}>
              <option defaultValue>Select All</option>
              <option value="user">User</option>
              <option value="reporter">Reporter</option>
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
            <button onClick={handleAddMember}
              className="text-white bg-primary px-2 pb-[5px] font-medium text-base rounded-[5px] " >
              <span className="text-[22px]">+</span> Add Member
            </button>
          </div>
        </div>
      </div>
      <>
        <div className="relative my-8 overflow-x-scroll shadow-xl scrollbar-hide ">
          <StageLoading isFetching={isFetching} isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
            <TableTemp
              btn={true}
              // linkUrl="/user-details"
              customID={true}
              rightPage={paginateData}
              totalData={userData?.data?.total}
              // linkFieldName="name"
              assignLinkOnHeader="profile_img"
              isImage={true}
              isImageLink={""}
              tableHead={tableHead}
              data={userData?.data}
              fieldsToShow={fieldsToShow}
              actionData={ActionData}
            />
          </StageLoading>
        </div>
      </>
      <Paginate pageChange={paginateData} data={userData} loadDataFn={handlePaginate} />
      <Modal modalContent={modalContent} />
    </div>
  );
};

export default UserDashBoard;
