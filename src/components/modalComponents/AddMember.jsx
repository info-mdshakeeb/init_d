import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "../../lib/toast";
import { useCreateUserMutation } from "../../redux/features/user/userApi";
import GlobalLoader from "../share/loading/GlobalLoader";
import { showModal } from "../../redux/features/modals/modalSlices";
import ImgUp from "../ImgUp";
import Options from "../share/Options";


const AddMember = () => {
  const dispatch = useDispatch();
  const { successToast } = Toast();
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const [createUser, { isError, isLoading, error }] = useCreateUserMutation();

  // local state
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [logo, setLogo] = useState({});

  let content;
  if (isLoading && !isError) {
    content = <GlobalLoader />;
  }


  const handleAddMember = async (data, e) => {
    const formData = new FormData();
    formData.append("profile_img", logo);
    formData.append("role", role);
    formData.append("gender", gender);
    formData.append("full_name", data?.full_name);
    formData.append("username", data?.username);
    formData.append("birth_date", data?.birth_date);
    formData.append("email", data?.email);
    formData.append("mobile_no", data?.mobile_no);
    formData.append("password", data?.password);
    formData.append("confirm_password", data?.confirm_password);
    if (!isLoading && !isError) {
      const result = await createUser(formData);
      if (result?.data?.status === true) {
        successToast(`${result?.data?.message}`);
        dispatch(showModal({ show: false, title: null, width: null, selectedItem: null, }));
      }
    }
  };
  return (
    <div>
      <div></div>
      <form className="px-3 lg:px-6 pt-2 pb-[25px]" onSubmit={handleSubmit(handleAddMember)}>
        <div className="flex flex-col text-[15px] font-poppins font-normal">
          <label htmlFor="accountId" className="font-medium">Photo </label>
          <div className="max-w-[200px]"><ImgUp image={logo} setState={setLogo} /> </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col w-full md:flex-row gap-x-4 gap-y-2">
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal ">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className={`p-[6px] mt-[2px] border ${errors.full_name ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`}
                placeholder="Enter Full Name"  {...register("full_name", { required: "Full Name is required", })}
              />
              {errors.full_name && (
                <span className="text-red-500 text-[14px] font-poppins"> {errors.full_name.message} </span>
              )}
            </div>
            <div className="w-full md:w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                className={`p-[6px] mt-[2px] border ${errors.username ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`} placeholder="Enter User Name"
                {...register("username", { required: "User Name is required", })}
              />
              {errors.userName && (
                <span className="text-red-500 text-[14px] font-poppins"> {errors.username.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row gap-x-4 gap-y-2">
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <input
                type="date"
                className={`p-[6px] mt-[2px] border ${errors.birth_date ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`}
                placeholder="Enter Date Of Birth"  {...register("birth_date", { required: "Date Of Birth is required", })}
              />
              {errors.birth_date && (
                <span className="text-red-500 text-[14px] font-poppins">{errors.birth_date.message}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="gender">Gender</label>
              <Options optionValue={gender} setOptionValue={setGender}
                options={["Male", "Females", "Others"]} />
            </div>
          </div>
          <div className="flex flex-col w-full lflex md:flex-row gap-x-4 gap-y-2">
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="text"
                className={`p-[6px] mt-[2px] border ${errors.email ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`} placeholder="Enter Email Address"
                {...register("email", { required: "Email Address is required", })}
              />
              {errors.email && (
                <span className="text-red-500 text-[14px] font-poppins"> {errors.email.message}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className={`p-[6px] mt-[2px] border ${errors.mobile_no ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`}
                placeholder="Enter Phone Number"
                {...register("mobile_no", { required: "Phone Number is required", })}
              />
              {errors.mobile_no && (
                <span className="text-red-500 text-[14px] font-poppins"> {errors.mobile_no.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col text-[15px] font-poppins font-normal">
            <label htmlFor="category_name"></label>
            <label htmlFor="role">Role</label>
            <Options
              optionValue={role}
              setOptionValue={setRole}
              options={["user", "reporter", "member", "admin"]}
            />
          </div>
          <div className="flex flex-col w-full lflex md:flex-row gap-x-4 gap-y-2 ">
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`p-[6px] mt-[2px] border ${errors.password ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`}
                placeholder="Enter Password"
                {...register("password", { required: "Password is required", })}
              />
              {errors.password && (
                <span className="text-red-500 text-[14px] font-poppins">  {errors.password.message}</span>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col text-[15px] font-poppins font-normal">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password"
                className={`p-[6px] mt-[2px] border ${errors.confirm_password
                  ? "border-red-500" : "border-[#bababa]"} cursor-default select-none focus:outline-none rounded-[4px]`}
                placeholder="Enter confirmPassword"
                {...register("confirm_password", { required: "confirmPassword is required", })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-[14px] font-poppins"> {errors.confirm_password.message}</span>)}
            </div>
          </div>
        </div>
        {isLoading ? (<p>{content}</p>
        ) : (
          <div className="flex items-center justify-end gap-3">
            <input
              onClick={() => (dispatch(showModal({
                show: false,
                title: null,
                width: null,
                selectedItem: null,
              })))}
              type="button"
              value="Cancel"
              className="mt-4 rounded-[3px] border-[1px] border-primary cursor-pointer px-6 py-1 font-poppins font-normal  w-32"
            />
            <input
              type="submit"
              value="Add"
              className="text-white mt-4 rounded-[3px] bg-primary cursor-pointer px-6 py-1 font-poppins font-normal  w-32"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddMember;
