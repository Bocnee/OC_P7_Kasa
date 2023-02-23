import { NavLink, useLocation } from 'react-router-dom';
import headerClasses from '../../styles/components/header.module.scss';
import logo from '../../assets/logo.svg';

function Header() {
   const pathname = useLocation().pathname;
   return (
      <header className={headerClasses.headerWrap}>
         <div className={headerClasses.headerFlex}>
            <h1 className={headerClasses.logoWrap}>
               <img
                  draggable="false"
                  className={headerClasses.logoWrap__logo}
                  src={logo}
                  alt="Logo de Kasa, Kasa écrit en toute lettre avec une maison pour remplacer le premier A"
               />
            </h1>
            <nav className={headerClasses.navWrap}>
               <NavLink
                  className={
                     pathname === '/'
                        ? headerClasses.navWrap__item__active
                        : headerClasses.navWrap__item
                  }
                  to="/">
                  Accueil
               </NavLink>
               <NavLink
                  className={
                     pathname === '/about'
                        ? headerClasses.navWrap__item__active
                        : headerClasses.navWrap__item
                  }
                  to="/about">
                  A Propos
               </NavLink>
            </nav>
         </div>
      </header>
   );
}

export default Header;
