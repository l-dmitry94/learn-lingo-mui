// import { useState } from 'react';
import Button, { Style } from 'components/Button';
import scss from './AuthButtons.module.scss';

const AuthButtons = () => {
    // const [loginModalIsOpen, setLoginModalIsOpen] = useState<boolean>(false);
    // const [RegistrationModalIsOpen, setRegistrationModalIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className={scss.buttons}>
                <Button
                    type="button"
                    // onClick={() => setLoginModalIsOpen(true)}
                    buttonStyle={Style.Login}
                >
                    Log in
                </Button>
                <Button
                    type="button"
                    // onClick={() => setRegistrationModalIsOpen(true)}
                    buttonStyle={Style.Registration}
                >
                    Registration
                </Button>
            </div>
        </>
    );
};

export default AuthButtons;
