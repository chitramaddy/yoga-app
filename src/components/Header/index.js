import router, { useRouter } from "next/router";

import Link from "next/link";
import styles from "./header.module.scss";

const navItems = [
  {
    path: "/about",
    label: "ABOUT",
  },
  {
    path: "/articles",
    label: "ARTICLES",
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <Link href="/">
          <a className={styles["header-logo"]}>NEWS NOW</a>
        </Link>

        <nav className={styles["header-nav"]}>
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <a
                className={`${styles["header-link"]} ${
                  router && router.pathname.includes(path)
                    ? styles["header-link-active"]
                    : ""
                }`}
              >
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
