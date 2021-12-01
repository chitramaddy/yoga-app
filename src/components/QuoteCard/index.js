import styles from "./quoteCard.module.scss";

const QuoteCard = ({ quotes }) => {
  return (
    <section className={styles.quotes}>
      <div className={styles["quotes-wrapper-grid"]}>
        {quotes.map(({ id, quote, source }) => (
          <article className={styles["quotes-grid-item"]} key={id}>
            <div className={styles["quotes-item-details"]}>
              <div className={styles["quotes-item-details-inner"]}>
                <h4>{quote.text}</h4>
                <br />
                {source != null ? <p>-{source}</p> : ""}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default QuoteCard;
