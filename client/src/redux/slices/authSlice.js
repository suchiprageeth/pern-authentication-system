import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticateUser: (state, action) => {
            state.isAuth = true
        },
        unAuthenticateUser: (state, action) => {
            state.isAuth = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { authenticateUser, unAuthenticateUser } = authSlice.actions

export default authSlice.reducer