"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../styles/dashboard.module.css";

interface Record {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
}

const Dashboard = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<Record[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  let logoutTimer: NodeJS.Timeout;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(handleLogout, 300000);
  };

  useEffect(() => {
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setFilteredRecords(data.slice(0, 20));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = records.filter(
      (record) =>
        record.firstName.toLowerCase().includes(lowerCaseTerm) ||
        record.lastName.toLowerCase().includes(lowerCaseTerm) ||
        record.phoneNumber.includes(searchTerm)
    );
    setFilteredRecords(filtered.slice(0, 20));
  }, [searchTerm, records]);

  useEffect(() => {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    logoutTimer = setTimeout(handleLogout, 300000);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      clearTimeout(logoutTimer);
    };
  }, []);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </header>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by First Name, Last Name, or Phone Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className={styles.recordsTable}>
        <thead>
          <tr>
            <th>Record #</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{record.id}</td>
              <td>
                <a href={`/patient/${record.id}`}>{record.firstName}</a>
              </td>
              <td>{record.middleName || "N/A"}</td>
              <td>{record.lastName}</td>
              <td>{record.phoneNumber}</td>
              <td>{new Date(record.dateOfBirth).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
