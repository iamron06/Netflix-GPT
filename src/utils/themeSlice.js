import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'theme' ,
    initialState : {
        isDarktheme: true,
    },
    reducers : {
        toggleTheme : (state , action) => {
          state.isDarktheme = !state.isDarktheme
        },

        },
    
})

export default themeSlice.reducer
export const {toggleTheme} = themeSlice.actions