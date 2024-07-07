import { Auth, getAuth, updateProfile, UserCredential } from 'firebase/auth';

import { setUser } from '../../../../redux/auth/auth.slice';
import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { IAuthState } from '../../../../redux/auth/types';
import { PersistPartial } from 'redux-persist/es/persistReducer';

export interface IFirebaseAuth {
    operation: (auth: Auth, email: string, password: string) => Promise<UserCredential>;
    trimmedEmail: string;
    trimmedPassword: string;
    dispatch: ThunkDispatch<
        {
            auth: IAuthState & PersistPartial;
        },
        undefined,
        UnknownAction
    > &
        Dispatch<UnknownAction>;
    trimmedName?: string;
}

const FirebaseAuth = async ({
    operation,
    trimmedEmail: email,
    trimmedPassword: password,
    dispatch,
    trimmedName: name,
}: IFirebaseAuth) => {
    const auth = getAuth();
    try {
        const { user } = await operation(auth, email, password);

        if (name) {
            await updateProfile(user, { displayName: name });
        }

        dispatch(
            setUser({
                displayName: user.displayName,
                accessToken: await user.getIdToken(),
                email: user.email,
            })
        );
    } catch (error) {
        console.error(error);
    }
};

export default FirebaseAuth;
