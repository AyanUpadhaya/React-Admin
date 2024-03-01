
import { setAuth, logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const useStoreAuth = () => {
  const dispatch = useDispatch();
  return {
    setAuth,
    logout,
    dispatch
  };
};

export default useStoreAuth;
