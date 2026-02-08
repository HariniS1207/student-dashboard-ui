import StudentLayout from "../layouts/StudentLayout";
import StatCard from "../components/statcard";
import PerformanceChart from "../components/performancechart";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <StudentLayout>
      <div className="welcome-card">
        <h2>Welcome back, Harini!</h2>
        <p>Track your academic progress and achievements</p>
      </div>

      <div className="stats">
        <StatCard title="CGPA" value="8.6" />
        <StatCard title="Attendance" value="90%" />
        <StatCard title="Projects" value="5" />
        <StatCard title="Certifications" value="6" />
      </div>

      <PerformanceChart />
    </StudentLayout>
  );
}