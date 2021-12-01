import Link from "next/link";
import Image from "next/image";
import styles from "./articleCard.module.scss";

const ArticleCard = ({ poses }) => {
  return (
    <section className={styles.articles}>
      <div className={styles["articles-title"]}>
        <h2>Some poses for a great start</h2>
      </div>
      <div className={styles["articles-wrapper-grid"]}>
        {poses.map(({ id, poseName, slug, steps, poseImage }) => (
          <article className={styles["articles-grid-item"]} key={id}>
            <Link href={`/${slug}`}>
              <a>
                <div className={styles["articles-image-wrapper"]}>
                  <Image
                    className={styles["articles-image"]}
                    src={poseImage.url}
                    alt={poseName}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className={styles["articles-item-details"]}>
                  <div className={styles["articles-item-details-inner"]}>
                    <h4>{poseName}</h4>
                  </div>
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleCard;
