import { useState } from 'react';
import UserProfile from './UserProfile';
import AuthButtons from './AuthButtons';

const Auth = () => {
    const [isLogged] = useState<boolean>(false);

    return <>{isLogged ? <UserProfile /> : <AuthButtons />}</>;
};

export default Auth;
