import { RootState } from 'redux/store';

export const selectName = (state: RootState) => state.auth.name;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectIsLogged = (state: RootState) => state.auth.isLogged;
