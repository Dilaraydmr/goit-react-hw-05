import { NavLink } from "react-router-dom";
import { FaHome, FaFilm } from "react-icons/fa"; 
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={styles.nav}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                <FaHome className={styles.icon} />
                Home
            </NavLink>

            <NavLink
                to="/movies"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                <FaFilm className={styles.icon} />
                Movies
            </NavLink>
        </nav>
    );
}

export default Navigation;
