import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CreateNewPass = () => {
  const handleCreateNewPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPass = form?.newPass?.value;
    const confirmPass = form?.confirmPass?.value;

    if (newPass === "" || confirmPass === "") {
      toast.error("Please fill the empty field!");
      return;
    }
    if (newPass === confirmPass) {
      toast.error("Your password should not matched!");
      return;
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-gray-300">
      <div className=" rounded-t-xl rounded-b-lg bg-primary mx-auto w-full  md:max-w-[600px] ">
        <div className="login_banner rounded-lg pt-[4.875rem] pb-[4.938rem]">
          <div className="px-2 text-center">
            <h2 className="mb-[30px] font-poppins text-[2rem] leading-[2.6rem]">
              Create New Password
            </h2>
          </div>
        </div>
        <form action="" onSubmit={handleCreateNewPass}>
          <div className="px-[1rem] pt-[2.063rem] pb-[2rem] md:px-[2.125rem] lg:px-[3.125rem]">
            <div className="space-y-5">
              <div className="flex flex-col gap-2 ">
                <label className="font-inter text-base font-medium leading-[1.3rem] text-white">
                  New Password<span className="text-[#D3AC46]">*</span>
                </label>
                <input
                  className="rounded outline-none border-[0.031rem] border-[#fff] bg-transparent px-4 py-2.5 font-poppins text-lg font-normal leading-[1.463rem] text-[#fff]"
                  type="password"
                  name="newPass"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="font-inter text-base font-medium leading-[1.3rem] text-white">
                  Confirm Password<span className="text-[#D3AC46]">*</span>
                </label>
                <input
                  className="rounded outline-none border-[0.031rem] border-[#fff] bg-transparent px-4 py-2.5 font-poppins text-lg font-normal leading-[1.463rem] text-[#fff]"
                  type="password"
                  name="confirmPass"
                  placeholder="Enter confirm password"
                  required
                />
              </div>
              <div>
                <p className="text-left font-poppins text-base leading-[1.3rem] text-white">
                  <Link
                    className="font-poppins text-base leading-[1.3rem] text-white hover:text-blue-500 hover:underline hover:underline-offset-2"
                    to="/login"
                  >
                    Login Here
                  </Link>
                </p>
              </div>
              <div>
                <button className="font-poppins font-medium w-full bg-white p-2.5 text-base leading-[1.3rem] tracking-[2%] text-[#222222]">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPass;
