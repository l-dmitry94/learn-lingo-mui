import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigation } from './Navigation.types';
import scss from './Navigation.module.scss';

const Navigation: FC<INavigation> = ({ items, onClose }) => {
    const [isLogged] = useState<boolean>(false);

    return (
        <ul className={scss.navigationList}>
            {items.map(
                ({ label, href }) =>
                    (isLogged || label !== 'Favorites') && (
                        <li key={label} onClick={onClose}>
                            <NavLink to={href} className={scss.navigationLink}>
                                {label}
                            </NavLink>
                        </li>
                    )
            )}
        </ul>
    );
};

export default Navigation;
