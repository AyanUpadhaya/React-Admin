import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminProfile,
  updateAdminProfile,
} from "../features/profile/profileSlice";

const useAdminProfile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  return {
    auth,
    profile,
    getAdminProfile,
    updateAdminProfile,
    dispatch,
  };
};

export default useAdminProfile;
