import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <h3>Chitra Madhan @ 2021.</h3>
      </div>
    </footer>
  );
};

export default Footer;
