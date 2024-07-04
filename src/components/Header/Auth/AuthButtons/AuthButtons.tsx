import { useState } from 'react';
import Button, { Style } from 'components/Button';
import scss from './AuthButtons.module.scss';
import Modal from 'components/Modal';
import RegistrationForm from '../RegistrationForm';
import LoginForm from '../LoginForm';

const AuthButtons = () => {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
    const [RegistrationModalIsOpen, setRegistrationModalIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className={scss.buttons}>
                <Button
                    type="button"
                    onClick={() => setLoginModalIsOpen(true)}
                    buttonStyle={Style.Login}
                >
                    Log in
                </Button>
                <Button
                    type="button"
                    onClick={() => setRegistrationModalIsOpen(true)}
                    buttonStyle={Style.Registration}
                >
                    Registration
                </Button>
            </div>

            <Modal
                modalIsOpen={RegistrationModalIsOpen}
                closeModal={() => setRegistrationModalIsOpen(false)}
                title="Registration"
                description="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            >
                <RegistrationForm />
            </Modal>

            <Modal
                modalIsOpen={loginModalIsOpen}
                closeModal={() => setLoginModalIsOpen(false)}
                title="Log In"
                description="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            >
                <LoginForm />
            </Modal>
        </>
    );
};

export default AuthButtons;
