import { useAppSelector } from './useRedux';
import { selectEmail, selectIsLogged, selectName } from '../redux/auth/auth.selectors';

const useAuth = () => {
    const name = useAppSelector(selectName);
    const email = useAppSelector(selectEmail);
    const isLogged = useAppSelector(selectIsLogged);

    return { name, isLogged, email };
};

export default useAuth;
