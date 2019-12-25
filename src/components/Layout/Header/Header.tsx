import styles from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <a href="/" className={styles.logoLink}>
        <span className={styles.logoText}>
          ресторан <span className={styles.love}></span>
        </span>
        <span className={styles.logoMainText}>Лесная Сказка</span>
      </a>
    </div>
    <nav className={styles.menu}>
      <ul>
        <li>
          <NavLink
            aria-current={"page"}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            to={routes.root}
          >
            новости
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current={"page"}
            className={styles.link}
            activeClassName={styles.activeLink}
            to={routes.menu}
          >
            меню
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
