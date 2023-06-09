import Image from "next/image";
import styles from "./AboutContainer.module.css";
import mainStyle from "@/styles/Main.module.css";

const AboutContainer = () => {
  return (
    <div className={`${styles.aboutContainer} ${mainStyle.limitContainer}`}>
      <div className={styles.aboutLeft}>
        <div className={styles.leftInner}>
          <h5>ABOUT</h5>
          <h2>A Founder Branding Agency</h2>
          <Image
            width={300}
            height={180}
            className={styles.aboutImage}
            alt="Banner Image"
            src="/assets/img/aboutImage.png"
            onClick={() => (window.location.href = "/")}
          />
          <span className={styles.aboutDesc}>
            Lorem ipsum dolor sit amet psum dolor sit amet psum dolor sit amet
            psum dolor sit amet
          </span>
        </div>
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.rightInner}>
          <h5>ABOUT</h5>
          <h2>A Founder Branding Agency</h2>
          <Image
            width={300}
            height={180}
            className={styles.aboutImage}
            alt="Banner Image"
            src="/assets/img/aboutImage.png"
          />
          <span className={styles.aboutDesc}>
            Lorem ipsum dolor sit amet psum dolor sit amet psum dolor sit amet
            psum dolor sit amet
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
