import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading:true,
  user:null,
  isAutenticated:false,
  date:null

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading=!state.isLoading
    },
    setUser: (state,action) => {
      state.user=action.payload;
      state.date= new Date();
      state.isAutenticated=true;
      state.isLoading=false
    },
    logout:(state)=>{
        state.user=null;
        state.date=null;
        state.isAutenticated=false;
    }
  },
})

export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer