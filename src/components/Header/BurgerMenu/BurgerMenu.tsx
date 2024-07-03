import { FC } from 'react';
import { Drawer } from '@mui/material';
import Navigation from '../Navigation';
import Auth from '../Auth';
import navigationItems from '../navigation.json';
import scss from './BurgerMenu.module.scss';

interface IBurgerMenu {
    menuIsOpen: boolean;
    closeMenu: () => void;
}

const BurgerMenu: FC<IBurgerMenu> = ({ menuIsOpen, closeMenu }) => {
    return (
        <Drawer anchor="right" open={menuIsOpen} onClose={closeMenu}>
            <div className={scss.content}>
                <Navigation items={navigationItems} onClose={closeMenu} />
                <Auth />
            </div>
        </Drawer>
    );
};

export default BurgerMenu;
