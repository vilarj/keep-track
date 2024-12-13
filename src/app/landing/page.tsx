import Navbar from "../components/Navbar";
import styles from "../styles/landingPage.module.css";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <section className={styles.hero}>
        <h1>Revolutionize Dental Practice Management with Keep Track!</h1>
        <p>
          Simplify patient records, manage appointments, and grow your practice
          seamlessly.
        </p>
        <button>Get Started Now</button>
      </section>
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureGrid}>
          <div>
            <h3>Centralized Records</h3>
            <p>Store and manage patient data efficiently.</p>
          </div>
          <div>
            <h3>Appointment Scheduling</h3>
            <p>Keep your calendar organized.</p>
          </div>
          <div>
            <h3>Secure and Scalable</h3>
            <p>Built with the latest tech for privacy and growth.</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>© 2025 Keep Track. All rights reserved.</p>
      </footer>
    </div>
  );
}
