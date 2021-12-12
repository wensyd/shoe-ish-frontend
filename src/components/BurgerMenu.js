import React, {Fragment} from "react";
import { NavLink, Link } from "react-router-dom";

const BurgerMenu = ({
    isOpen,
    closeBurgerMenu
}) => {

    const styles = isOpen ? 'burgermenu burgermenu--open' : 'burgermenu burgermenu--closed';

    return(
        <Fragment>
        {isOpen ? <div className="burgermenu__backdrop" onclick={closeBurgerMenu}></div> : <Fragment></Fragment> }

        <nav className={`${styles}`}>
        <ul className="burgermenu__list">
          <Link className="burgermenu__logo" to="/">
            Shoe-Ish
          </Link>

          <li className="burgermenu__list__item" onClick={closeBurgerMenu}>
            <NavLink className="burgermenu__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="burgermenu__list__item" onClick={closeBurgerMenu}>
            <NavLink className="burgermenu__link" to="/about">
              About
            </NavLink>
          </li>

          <li className="burgermenu__list__item" onClick={closeBurgerMenu}>
            <NavLink className="burgermenu__link" to="/new">
              Create New
            </NavLink>
          </li>

          
        </ul>
      </nav>

        </Fragment>
    );
};

export default BurgerMenu;