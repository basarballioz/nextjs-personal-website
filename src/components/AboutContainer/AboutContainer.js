import styles from "./AboutContainer.module.css";

const AboutContainer = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutLeft}>
        <div className={styles.leftInner}>
          <h5>About</h5>
          <h2>Başar Ballıöz Hakkında</h2>
        </div>
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.rightInner}>
          <h5>About</h5>
          <h2>Hakkında Area</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
