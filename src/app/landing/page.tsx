import Image from "next/image";
import Link from "next/link";
import image from "../../../assets/expediente.jpg";
import Navbar from "../components/Navbar";
import styles from "../styles/landing.module.css";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
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
            <Link href="/pricing" passHref>
              <button className={styles.heroButton}>Get Started Now</button>
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.container}>
        <div className={styles.feature}>
          <h3>Efficient Records</h3>
          <p>Keep all patient data organized and accessible in one place.</p>
        </div>
        <div className={styles.feature}>
          <h3>Secure Storage</h3>
          <p>Your data is encrypted and safely stored on our platform.</p>
        </div>
        <div className={styles.feature}>
          <h3>Streamlined Workflow</h3>
          <p>Optimize scheduling and management with our intuitive tools.</p>
        </div>
      </div>
    </div>
  );
}
