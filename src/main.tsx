import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import { persistor, store } from './redux/store';
import './firebase';
import 'styles/index.scss';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter basename="/learn-lingo-mui">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
