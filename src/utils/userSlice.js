import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers: {
        addUser : (state, action) => {
         return action.payload;
        //  puts return to initial state 
        },
        removeUser : (state, action) => {
         return null;
         //  puts return to initial state 
        },

    },
})

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;