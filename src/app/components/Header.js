import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
// import Nav from "@/app/components/Nav";

function Header() {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={150} height={40} />
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header