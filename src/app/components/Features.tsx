import styles from "../styles/features.module.css";

export default function Features() {
  return (
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
  );
}
