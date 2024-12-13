import styles from "../styles/hero.module.css";

function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>
          Revolutionize Dental Practice Management with Keep Track!
        </h1>
        <p className={styles.heroSubtext}>
          Simplify patient records, manage appointments, and grow your practice
          seamlessly.
        </p>
        <button className={styles.heroButton}>Get Started Now</button>
      </section>
    </div>
  );
}

export default Hero;
