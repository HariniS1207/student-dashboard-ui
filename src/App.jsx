import { useState } from 'react'
import StudentLayout from './layouts/StudentLayout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import YearPage from './pages/YearPage'
import OverallReport from './pages/OverallReport'

function App() {
  const [activePage, setActivePage] = useState("Home")

  const renderPage = () => {
    if (activePage === "Home") return <Home />
    if (activePage === "Profile") return <Profile />
    if (activePage.includes("Year")) return <YearPage year={activePage} />
    if (activePage === "Report") return <OverallReport />
  }

  return (
    <StudentLayout setActivePage={setActivePage}>
      {renderPage()}
    </StudentLayout>
  )
}

export default App
