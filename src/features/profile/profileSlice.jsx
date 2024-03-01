import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAuthToken from "../../utils/getAuthToken";
import { base_url } from "../../utils/api";

const action_types = {
  ADMIN_GET: "admin/get",
  ADMIN_UPDATE: "admin/update",
};

const initialState = {
  name: "",
  email: "",
  imgUrl: "",
  isLoading: false,
  isError: false,
  isRequestLoading: false,
};


//GET

export const getAdminProfile = createAsyncThunk(
  action_types.ADMIN_GET,
  async ({ id }) => {
    const token = getAuthToken();
    const response = await fetch(`${base_url}/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}`);
    } else {
      return response.json();
    }
  }
);

// PATCH
export const updateAdminProfile = createAsyncThunk(
  action_types.ADMIN_UPDATE,
  async ({ id,data }) => {
    const token = getAuthToken();
    const response = await fetch(`${base_url}/user/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}`);
    } else {
      return response.json();
    }
  }
);


const profileSlice = createSlice({
    name:'profile',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAdminProfile.pending,(state,action)=>{
            
            state.isLoading = true;
            state.isError = false;
            state.isRequestLoading = true;           
        })
        .addCase(getAdminProfile.fulfilled,(state,action)=>{
            state.email = action.payload?.email;
            state.name = action.payload?.name;
            state.imgUrl = action.payload?.imgUrl;
            state.isLoading = false;
            state.isError = false;
            state.isRequestLoading = false;           
        })
        .addCase(updateAdminProfile.pending, (state, action) => {
          state.isError = false;
          state.isRequestLoading = true;
        })
        .addCase(updateAdminProfile.fulfilled, (state, action) => {
          state.isError = false;
          state.isRequestLoading = false;
        });
    }
})

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;