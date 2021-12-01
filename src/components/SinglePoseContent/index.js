import styles from "./singlePoseContent.module.scss";

const SinglePoseContent = ({ pose }) => {
  return (
    <section className={styles["poseContent"]}>
      <div className={styles["poseContent-wrapper"]}>
        <div className={styles["poseContent-title"]}>
          <h2>{pose.poseName}</h2>
        </div>
        <div className={styles["poseContent-text"]}>{pose.steps.text}</div>
      </div>
    </section>
  );
};

export default SinglePoseContent;
