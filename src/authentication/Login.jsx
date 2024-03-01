import { Link, json, useNavigate } from "react-router-dom";
import { loginRoute } from "../utils/api";
import { useEffect, useState } from "react";
import useStoreAuth from "../hooks/useStoreAuth";
import useReduxStore from "../hooks/useReduxStore";
import useFetch from "../hooks/useFetch";
import { infoNotify,errorNotify } from "../utils/getNotify";
const Login = () => {
  const {setAuth,dispatch} = useStoreAuth();
  const {postData} = useFetch();
  const navigate = useNavigate();
  const { email } = useReduxStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await postData(loginRoute, data, "login");

      if (response) {
        infoNotify('Logged in successfully')
        dispatch(setAuth(response));
        setIsLoading(false);
        navigate("/");
      }
    } catch (error) {
      errorNotify(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      navigate("/");
    }
  }, [navigate, email]);


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
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
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
                placeholder="Enter your username.."
                type="text"
                required
                className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400   focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password..."
                required
                className="block w-full rounded-md border border-gray-300 py-3 px-4 text-gray-900 shadow-sm  placeholder:text-gray-400   focus:outline-none sm:text-sm sm:leading-6"
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
                "Login"
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
