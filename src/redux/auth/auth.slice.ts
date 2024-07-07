import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState, IPayloadAction } from './types';

const initialState: IAuthState = {
    email: null,
    name: null,
    token: null,
    isLogged: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IPayloadAction>) {
            state.email = action.payload.email;
            state.name = action.payload.displayName;
            state.token = action.payload.accessToken;
            state.isLogged = true;
        },
        removeUser(state) {
            state.email = null;
            state.name = null;
            state.token = null;
            state.isLogged = false;
        },
    },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
