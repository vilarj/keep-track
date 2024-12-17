import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";

function About() {
  return (
    <div>
      <Navbar />
      <section className={styles.about}>
        <p>
          Keep Track is designed to simplify and revolutionize dental practice
          management. We are committed to providing seamless solutions for
          patient record management, appointment scheduling, and practice
          growth.
        </p>
        <p>
          With Keep Track, you can focus on what you do best—providing
          exceptional dental care—while we handle the rest.
        </p>
      </section>
    </div>
  );
}

export default About;
