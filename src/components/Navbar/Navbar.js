import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" legacyBehavior>
          <Image
            src="/assets/img/myLogo.png"
            alt="Site Logo"
            width={60}
            height={60}
            className={styles.navbarLogo}
          />
        </Link>
        <div className={styles.navbarToggle} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navbarMenu} ${isOpen ? styles.active : ""}`}>
          <li className={styles.navbarItem}>
            <Link href="/" legacyBehavior>
              <a className={styles.navbarLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about" legacyBehavior>
              <a className={styles.navbarLink}>About</a>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contact" legacyBehavior>
              <a className={styles.navbarLink}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
