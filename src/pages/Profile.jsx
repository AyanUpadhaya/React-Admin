import React from 'react'
import Password from '../components/shared/ui/Password';

const Profile = () => {
    const isLoading = false;
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div className="bg-white self-stretch rounded-lg p-4 font-poppins">
      <div className="mt-10 ">
        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
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
                required
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
                required
                className="block w-full rounded-md border-1 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400 border border-gray-300 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
  );
}

export default Profile