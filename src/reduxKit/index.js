import {
  configureStore,
  getDefaultMiddleware,
  createSlice,
  }from "@reduxjs/toolkit";
import {DATA_REQUESTED} from '../redux/constants/action_types';
const middleware = [
  ...getDefaultMiddleware(),

]

const initialState = {
  user:[],
  remoteUser:[]
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers:{
    addUser: (state,action)=>{
      state.user = action.payload;
    },
    dataLoaded:(state,action)=>{
      state.remoteUser = action.remoteUser;
    },
    foundBadWord: () =>{
      return console.log("bad word found")
    },
  },
});


const {addUser, dataLoaded, foundBadWord} = userSlice.actions;
const userReducer= userSlice.reducer;


export function getData(url){
  return {type:DATA_REQUESTED,payload: { url } };
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware,
});
