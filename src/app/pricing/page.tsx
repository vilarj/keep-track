import Navbar from "../components/Navbar";
import styles from "../styles/pricing.module.css";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$49/month",
    features: [
      "Patient Record Management",
      "Appointment Scheduling",
      "Email Support",
    ],
  },
  {
    title: "Professional Plan",
    price: "$99/month",
    features: [
      "Everything in Basic",
      "Performance Analytics",
      "Priority Support",
      "Custom Integrations",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "Custom Pricing",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Advanced Reporting",
      "Unlimited Users",
    ],
  },
];

export default function Pricing() {
  return (
    <div>
      <Navbar />
      <section className={styles.pricing}>
        <h1>Our Pricing Plans</h1>
        <div className={styles.pricingCards}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className={styles.pricingCard}>
              <h2>{plan.title}</h2>
              <p className={styles.price}>{plan.price}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={styles.selectButton}>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
