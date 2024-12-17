import Image from "next/image";
import Link from "next/link";
import { FaServicestack, FaSignInAlt } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import logo from "../../../public/KeepTrack.png";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Link href="/">
<<<<<<< HEAD
            <Image src={logo} width={450} height={150} alt="KeepTrack Logo" />
=======
            <Image src={logo} width={450} height={150} alt="Keep Track Logo" />
>>>>>>> d576516 (All routes work properly | Placeholders in place | TODO: Need to work on the login logic and the styling of all new placeholders)
          </Link>
        </div>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">
            About <MdContactSupport className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link href="/services">
            Services <FaServicestack className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link href="/login">
            Login <FaSignInAlt className={styles.icon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
