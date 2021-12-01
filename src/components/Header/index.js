import router, { useRouter } from "next/router";

import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <Link href="/">
          <a className={styles["header-logo"]}>YOGI</a>
        </Link>
      </div>
      <h5>become one with the universe</h5>
    </header>
  );
};

export default Header;
