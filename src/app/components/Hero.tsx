import Image from "next/image";
import image from "../../../assets/expediente.jpg";
import styles from "../styles/hero.module.css";

function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src={image} alt="Dental management" layout="responsive" />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Revolutionize Dental Practice Management with KeepTrack
          </h1>
          <p className={styles.heroSubtext}>
            Simplify patient records, manage appointments, and grow your
            practice seamlessly.
          </p>
          <button className={styles.heroButton}>Get Started Now</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
