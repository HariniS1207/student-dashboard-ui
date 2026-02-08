import { useState } from "react"
import SemesterCard from "../components/SemesterCard"
import ListSection from "../components/ListSection"
import { academicData } from "../data/academicData"
import { projectData } from "../data/projectData"
import { certificationData } from "../data/certificationData"
import { internshipData } from "../data/internshipData"

function YearPage({ year }) {
  const [activeTab, setActiveTab] = useState("Academics")

  const tabs = [
    "Academics",
    "Projects",
    "Certifications",
    "Internship",
    "Extra Curricular",
    "Competitions",
    "Attendance"
  ]

  return (
    <div>
      <h2>{year} Details</h2>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* CONTENT */}
      {activeTab === "Academics" && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <SemesterCard
            title="Semester 1"
            data={academicData["1st Year"].sem1}
          />
          <SemesterCard
            title="Semester 2"
            data={academicData["1st Year"].sem2}
          />
        </div>
      )}

      {activeTab === "Projects" && (
        <ListSection
          title="Projects"
          items={projectData.map(p => p.title)}
        />
      )}

      {activeTab === "Certifications" && (
        <ListSection
          title="Certifications"
          items={certificationData}
        />
      )}

      {activeTab === "Internship" && (
        <ListSection
          title="Internships"
          items={internshipData.map(
            i => `${i.company} - ${i.role} (${i.duration})`
          )}
        />
      )}

      {activeTab === "Extra Curricular" && (
        <ListSection
          title="Extra Curricular Activities"
          items={[
            "Coding Club",
            "Hackathon Participation",
            "Tech Fest Volunteering"
          ]}
        />
      )}

      {activeTab === "Competitions" && (
        <ListSection
          title="Competitions Participated"
          items={[
            "Inter-college Hackathon",
            "Code Debug Contest",
            "Paper Presentation"
          ]}
        />
      )}

      {activeTab === "Attendance" && (
        <p>Attendance details will be shown here.</p>
      )}
    </div>
  )
}

export default YearPage
