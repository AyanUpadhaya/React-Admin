import React, { useEffect, useState } from "react";
import Password from "../components/shared/ui/Password";
import { profile as profleDummy } from "../assets/getAssets";
import { imageUploadApi } from "../utils/api";
import useAdminProfile from "../hooks/useAdminProfile";
import { errorNotify, infoNotify } from "../utils/getNotify";

const Profile = () => {
  const isLoading = false;
  const [imagePreview, setImagePreview] = useState(false);
  const [imgLoading,setImgLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const { auth, profile, updateAdminProfile, getAdminProfile, dispatch } =
    useAdminProfile();

  useEffect(() => {
    if (profile.name == "") {
      dispatch(getAdminProfile({ id: auth.id }));
    }
  }, [profile]);

  //fetch uploaded img url
  const fetchImageData = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);
    setImgLoading(true);

    const res = await fetch(imageUploadApi, {
      method: "POST",
      body: data,
    });
    const res_data = await res.json();
    if (res_data.version_id) {
      setImgUrl(res_data.url);
      setImgLoading(false)
      return res_data;
    }else{
      setImgLoading(false);
    }
  };

  const createNextState = async (name,email,imgUrl)=>{
    const data = {
      name,
      email,
      imgUrl
    }
    console.log(data)
    dispatch(updateAdminProfile({ id: auth.id, data }))
      .unwrap()
      .then((originalPromiseResult) => {
        infoNotify("Admin Updated");
        setFile(null);
      })
      .catch((error) => {
        console.log(error)
        setFile(null);
        setImagePreview(false);
      });

  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullname.value;
    const email = form.email.value;

    if(name == '' || email == '' ){

      errorNotify("Fields cannot be empty");

    }else{

      if (file !== null) {
        const uploadImage = await fetchImageData();
        if (uploadImage?.version_id) {
          createNextState(name, email, uploadImage?.url);
        } else {
          errorNotify("Something went wrong");
        }
      } else {
        dispatch(updateAdminProfile({ id: auth.id, data: { name, email } }))
          .unwrap()
          .then((originalPromiseResult) => {
            infoNotify("Admin Updated");
            setFile(null)
          })
          .catch((error) => {
            console.log(error);

          });
      }

    }

    
  };
  //handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the selected file and create a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFile(file);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setFile(file);
    }
  };

  return profile.isLoading ? (
    <>Loading...</>
  ) : (
    <div className="bg-white self-stretch rounded-lg p-4 font-poppins">
      <div className="mt-10 ">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6 items-end">
            {/* profile form */}

            <form
              className="grid grid-cols-1 gap-6"
              onSubmit={handleProfileUpdate}
            >
              {/* image preview */}
              <div className="relative max-w-max mx-auto">
                <div className="h-[200px] w-[200px] rounded-full border-4 border-[#FAF7F5]">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt=""
                      className="h-[190px] w-[200px] object-cover rounded-full"
                    />
                  ) : (
                    <img
                      src={profile?.imgUrl || profleDummy}
                      className="h-[200px] w-[200px] object-cover rounded-full"
                    ></img>
                  )}
                </div>

                <label
                  htmlFor="selectImage"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full bg-slateLow absolute right-0 bottom-5"
                >
                  <i
                    className="fa-solid fa-camera text-2xl"
                    style={{ color: "#515EDB" }}
                  ></i>
                </label>
                <input
                  type="file"
                  id="selectImage"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              {/* fullname */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Enter your full name.."
                    defaultValue={profile?.name}
                    className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400   focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address..."
                    defaultValue={profile?.email}
                    readOnly
                    className="block w-full rounded-md border-1 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400 border border-gray-300 focus:outline-none sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* button */}
              <div>
                <button
                  type="submit"
                  disabled={imgLoading || profile.isRequestLoading}
                  className="flex w-full justify-center rounded-md bg-customColor py-3 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {imgLoading || profile.isRequestLoading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Update"
                  )}
                </button>
              </div>
            </form>

            {/* password form */}
            <form className="grid grid-cols-1 gap-6">
              {/* current password */}
              <Password
                label={"Current Password"}
                placeholder={"Enter current password"}
              ></Password>
              {/* new password */}
              <Password
                label={"New Password"}
                placeholder={"Enter new password"}
              ></Password>
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-customColor py-3 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Update"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
