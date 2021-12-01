import styles from "./newsletterBanner.module.scss";

const NewsletterBanner = () => {
  return (
    <section className={styles["banner"]}>
      <div className={styles["banner-wrapper"]}>
        <h2 className={styles["banner-heading"]}>
          Receive notifications about our events
        </h2>
        <form className={styles["banner-form"]}>
          <input
            className={styles["banner-form-input"]}
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button className={styles["banner-form-btn"]}>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
