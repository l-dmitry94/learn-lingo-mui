import UserProfile from './UserProfile';
import AuthButtons from './AuthButtons';
import useAuth from 'hooks/useAuth';

const Auth = () => {
    const { isLogged } = useAuth();

    return <>{isLogged ? <UserProfile /> : <AuthButtons />}</>;
};

export default Auth;
