import { useEffect } from "react";
import styles from "@styles/Layout/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useActions } from "@hooks/useActions";

export default function Navbar() {
  const { pathname } = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { logout, getUser } = useActions();
  useEffect(() => {
    getUser();
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbarBrand}>Book Review</a>
      </Link>
      <div className={styles.navContainer}>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/books">
              <a className={pathname === "/books" ? styles.active : ""}>
                Books
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/genres">
              <a className={pathname === "/genres" ? styles.active : ""}>
                Genres
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/authors">
              <a className={pathname === "/authors" ? styles.active : ""}>
                Authors
              </a>
            </Link>
          </li>
        </ul>
        {isLoggedIn && (
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link href="/dashboard">
                <a className={pathname === "/dashboard" ? styles.active : ""}>
                  Dashboard
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <a
                className={pathname === "/logout" ? styles.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        )}
        {!isLoggedIn && (
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link href="/register">
                <a className={pathname === "/register" ? styles.active : ""}>
                  Register
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login">
                <a className={pathname === "/login" ? styles.active : ""}>
                  Login
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
