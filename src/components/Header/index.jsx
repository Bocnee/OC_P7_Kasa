import { NavLink, useLocation } from 'react-router-dom';

import classes from '../../styles/components/header.module.scss';

import logo from '../../assets/logo.svg';

function Header() {
   const pathname = useLocation().pathname;

   return (
      <header className={classes.headerWrap}>
         <div className={classes.headerFlex}>
            <NavLink to="/">
               <h1 className={classes.logoWrap}>
                  <img
                     draggable="false"
                     className={classes.logoWrap__logo}
                     src={logo}
                     alt="Logo de Kasa, Kasa écrit en toute lettre avec une maison pour remplacer le premier A"
                  />
               </h1>
            </NavLink>
            <nav className={classes.navWrap}>
               <NavLink
                  className={
                     pathname === '/'
                        ? `${classes.navWrap__item} ${classes.navWrap__item__active}`
                        : classes.navWrap__item
                  }
                  to="/">
                  Accueil
               </NavLink>
               <NavLink
                  className={
                     pathname === '/about'
                        ? `${classes.navWrap__item} ${classes.navWrap__item__active}`
                        : classes.navWrap__item
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
