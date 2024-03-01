import { useDispatch } from "react-redux";
import useStoreAuth from "../../../hooks/useStoreAuth";
import { logout } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const {logout,dispatch} = useStoreAuth();
  const navigate = useNavigate();


  return (
    <div className="bg-slate-800 flex justify-between p-4">
      <button onClick={toggleSidebar}>
        <i
          className="fa-solid fa-bars fa-2xl"
          style={{ color: "#ffffff", width: "40px" }}
        ></i>
      </button>

      <div className="w-6 h-6 bg-white rounded-full p-4 flex justify-center items-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <i className="fa-solid fa-user"></i>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[100] p-4 shadow bg-base-100 rounded-lg w-52 mt-4 flex flex-col gap-2"
          >
            <li className="hover:bg-neutral-300 bg-neutral-100 rounded p-2 font-medium  cursor-pointer">
              <div
                className="flex gap-2 items-center"
                onClick={() => navigate("profile")}
              >
                <i className="fa-solid fa-user"></i> <span>Profile</span>
              </div>
            </li>
            <li
              onClick={() => dispatch(logout())}
              className="hover:bg-neutral-300 bg-neutral-100 rounded p-2 font-medium  cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Log out</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
