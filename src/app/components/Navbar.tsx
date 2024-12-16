import Image from "next/image";
import Link from "next/link";
import { FaServicestack, FaSignInAlt } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import logo from "../../../assets/Logo1.jpg";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} width={150} height={150} alt="Keep Track Logo" />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">
            About Us <MdContactSupport className={styles.icon} />
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
