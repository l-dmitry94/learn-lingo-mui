import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppBar;
