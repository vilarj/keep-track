import Navbar from "../components/Navbar";
import styles from "../styles/services.module.css";

function Services() {
  return (
    <div>
      <Navbar />
      <section className={styles.services}>
        <h2>Our Services</h2>
        <ul>
          <li>Comprehensive patient record management</li>
          <li>Appointment scheduling and reminders</li>
          <li>Practice performance analytics</li>
          <li>Secure and compliant data storage</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
