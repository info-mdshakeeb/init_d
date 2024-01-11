/* eslint-disable react/prop-types */

import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../lib/toast";
import { showModal } from "../../redux/features/modals/modalSlices";


const DeleteCompo = ({ type, page }) => {
  const dispatch = useDispatch();
  const { errorToast, successToast } = Toast();
  const { modal } = useSelector((state) => state.modal);


  const confirmDelete = () => {
    successToast("Successfully deleted");
  }
  const cancelConfirm = () => { dispatch(showModal({ show: false, title: null, width: null, selectedItem: null })); };

  return (
    <Fragment>
      <h1 className="px-4 my-3 text-xl font-bold">
        Are you sure you wanted to delete?
      </h1>
      <div className="bg-orange-200 ">
        <p className="px-4 text-red-700 ">
          This action will permanently delete the{" "}
          <span className="font-bold text-red-600 text-md">
            :{" "}
            {modal.selectedItem?.name
              ? modal.selectedItem?.name
              : modal.selectedItem?.bankName}{" "}
          </span>
          <br />
        </p>
      </div>
      <div className="flex items-center justify-end gap-3 p-4 mt-5 lg:gap-5">
        <button
          onClick={() => cancelConfirm()}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#F56E6E] px-4 py-2 font-poppins text-base font-normal text-white"
        >
          <svg
            style={{ color: "#fff" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Cancel
        </button>
        <button
          type="submit"
          // disabled={loading.includes(true)}
          onClick={() => confirmDelete()}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#63AD6F] px-4 py-2 font-poppins text-base font-normal text-white disabled:bg-gray-500"
        >
          <svg
            style={{ color: "#fff" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Confirm
        </button>
      </div>
    </Fragment>
  );
};

export default DeleteCompo;