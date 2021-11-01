import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false }
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

// ACTIONS
export const authActions = authSlice.actions;

// REDUCER
export default authSlice.reducer;