import { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import BurgerMenu from './BurgerMenu';
import Button, { Style } from 'components/Button';
import { useMedia } from 'hooks/useMedia';
import { icons } from 'assets/icons';
import navigationItems from './navigation.json';
import scss from './Header.module.scss';

const Header = () => {
    const { isMobile } = useMedia();
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isMobile) {
            setMenuIsOpen(false);
        }
    }, [isMobile]);

    return (
        <>
            <header className={scss.header}>
                <div className={scss.container}>
                    <div className={scss.wrapper}>
                        <Logo />
                        {!isMobile && (
                            <>
                                <Navigation items={navigationItems} />
                                <Auth />
                            </>
                        )}
                        {isMobile && (
                            <Button buttonStyle={Style.Burger} onClick={() => setMenuIsOpen(true)}>
                                <svg className={scss.burgerIcon}>
                                    <use href={`${icons}#icon-burger`}></use>
                                </svg>
                            </Button>
                        )}
                    </div>
                </div>
            </header>

            <BurgerMenu menuIsOpen={menuIsOpen} closeMenu={() => setMenuIsOpen(false)} />
        </>
    );
};

export default Header;
