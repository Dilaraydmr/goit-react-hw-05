import { NavLink } from "react-router-dom";
import { FaHome, FaFilm } from "react-icons/fa"; // ikonlar için
import styles from "./Navigation.module.css"; // ✅ styles olarak import et

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
