import { Link } from 'react-router-dom';
import { icons } from 'assets/icons';
import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={scss.logo}>
            <svg className={scss.logoIcon}>
                <use href={`${icons}#icon-logo`}></use>
            </svg>
            <span className={scss.logoLabel}>LearnLingo</span>
        </Link>
    );
};

export default Logo;
