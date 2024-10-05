import {createSlice} from  '@reduxjs/toolkit';

//When login startoff blank i.e. when app starts everything is blank
const initialState={
    name:"",
    email:"",
    photo:"",
};
const userSlice =createSlice({
    name: "user",
    initialState,
    reducers: {
    //when selected acc remember it
        setUserLoginDetails: (state, action)=>{
    state.name = action.payload.name;
    state.email = action.payload.email ;
    state.photo = action.payload.photo ;
    },
    //when logout forget the selected acc
    setSignOutState: (state)=>{
        state.name=null;
        state.email= null;
        state.photo= null;
    },

},
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
