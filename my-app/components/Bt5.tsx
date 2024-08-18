"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Bt5.module.css";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link
        href="/"
        className={
          pathname === "/" ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
      >
        About
      </Link>
      <Link
        href="/contact"
        className={
          pathname === "/contact"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
      >
        Contact
      </Link>
      <Link
        href="/login"
        className={
          pathname === "/login"
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
