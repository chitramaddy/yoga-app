import Link from "next/Link";
import Image from "next/image";
import styles from "./articleCard.module.scss";

const ArticleCard = ({ articles }) => {
  return (
    <section className={styles.articles}>
      <div className={styles["articles-wrapper-grid"]}>
        {articles.map(
          ({ author, title, description, url, urlToImage, content }) =>
            urlToImage &&
            urlToImage !== "null" && (
              <article className={styles["articles-grid-item"]} key={title}>
                <Link href={`${url}`}>
                  <a>
                    <div className={styles["articles-image-wrapper"]}>
                      <img
                        className={styles["articles-image-wrapper-resize"]}
                        src={urlToImage}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className={styles["articles-item-details"]}>
                      <div className={styles["articles-item-details-inner"]}>
                        <h5>{title}</h5>
                        <p>{author}</p>
                        <p>{description}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default ArticleCard;