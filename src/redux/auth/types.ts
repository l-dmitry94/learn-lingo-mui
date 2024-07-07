export interface IAuthState {
    name: string | null;
    email: string | null;
    token: string | null;
    isLogged: boolean;
}

export interface IPayloadAction {
    displayName: string | null;
    email: string | null;
    accessToken: string | null;
}
