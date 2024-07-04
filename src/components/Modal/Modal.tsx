import { FC, ReactNode } from 'react';
import { Backdrop, Fade, Modal as ReactModal } from '@mui/material';
import scss from './Modal.module.scss';
import Button, { Style } from 'components/Button';
import { icons } from 'assets/icons';

interface IModal {
    modalIsOpen: boolean;
    closeModal: () => void;
    title: string;
    description: string;
    children: ReactNode;
}

const Modal: FC<IModal> = ({ modalIsOpen, closeModal, title, description, children }) => {
    return (
        <ReactModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalIsOpen}
            onClose={closeModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={modalIsOpen}>
                <div className={scss.overlay}>
                    <div className={scss.content}>
                        <Button
                            buttonStyle={Style.Close}
                            onClick={closeModal}
                            className={scss.closeButton}
                        >
                            <svg className={scss.closeIcon}>
                                <use href={`${icons}#icon-close`}></use>
                            </svg>
                        </Button>
                        <div className={scss.info}>
                            <h2 className={scss.title}>{title}</h2>
                            <p className={scss.description}>{description}</p>
                        </div>
                        {children}
                    </div>
                </div>
            </Fade>
        </ReactModal>
    );
};

export default Modal;
