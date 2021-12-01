import Image from "next/image";
import styles from "./poseBanner.module.scss";

const PoseBanner = ({ poseImage, poseName }) => {
  return (
    <section>
      <div className={styles["poseBanner"]}>
        <div className={styles["poseBanner--image-wrapper"]}>
          <Image
            className={styles["poseBanner-image"]}
            src={poseImage.url}
            alt={poseName}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles["poseBanner-item-details"]}>
          <div className={styles["poseBanner-item-details-inner"]}>
            <h4 className={styles["poseBanner-title"]}>{poseName}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoseBanner;
