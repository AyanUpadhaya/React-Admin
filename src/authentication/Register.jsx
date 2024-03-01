import { Link, useNavigate } from "react-router-dom";
import useReduxStore from "../hooks/useReduxStore";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { errorNotify, successNotify } from "../utils/getNotify";
import { registerRoute } from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const { email } = useReduxStore();
  const [isLoading,setIsLoading] = useState(false);
  const {postData} = useFetch();

  const handleRegistration = async () => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const fullname = form.fullname.value;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      name: fullname,
      username: username,
      password: password,
      email: email,
    };
    console.log(data);

    try{
      
      const response = await postData(registerRoute, data, "register");

      if (response) {
        successNotify("Registered in successfully");
        setIsLoading(false);
        navigate("/");
      }
    }catch(error){
       errorNotify(error.message);
       setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 font-poppins">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome Back
        </h2>
        <h2 className="mt-3 text-center text-xl font-bold text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleRegistration}>
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
          {/* username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username.."
                required
                className="block w-full rounded-md border-1 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400 border border-gray-300 focus:outline-none sm:text-sm sm:leading-6"
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

          {/* password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password..."
                required
                className="block w-full rounded-md border-1 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400 border border-gray-300 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-customColor py-3 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
