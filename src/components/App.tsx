import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import HomePage from 'pages/HomePage';
import TeachersPage from 'pages/TeachersPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path="teachers" element={<TeachersPage />} />
            </Route>
        </Routes>
    );
};

export default App;
