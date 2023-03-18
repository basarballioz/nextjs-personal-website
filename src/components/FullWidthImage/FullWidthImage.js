import Image from "next/image";
import styles from "./FullWidthImage.module.css";

const FullWidthImage = () => {
  return (
    <Image
      width={1920}
      height={1080}
      className={styles.image}
      alt="Banner Image"
      src="/assets/img/bannerImage.png"
    />
  );
};

export default FullWidthImage;
