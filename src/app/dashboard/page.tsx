"use client";
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

  useEffect(() => {
    // Simulating an API call
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setFilteredRecords(data.slice(0, 20)); // Initial 20 records
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
    setFilteredRecords(filtered.slice(0, 20)); // Only show first 20 matches
  }, [searchTerm, records]);

  return (
    <div className={styles.dashboard}>
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
