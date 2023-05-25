import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

function Nav() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link className={styles.navbarLink} href="/">Home</Link></li>
                <li className={styles.navbarItem}><Link className={styles.navbarLink} href="/about">About</Link></li>
                <li className={styles.navbarItem}><Link className={styles.navbarLink} href="/movie">Movie</Link></li>
                <li className={styles.navbarItem}><Link className={styles.navbarLink} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav