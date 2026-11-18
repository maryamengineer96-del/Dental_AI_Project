import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './pages/Login.jsx'
import DoctorDashboard from './pages/doctor/DoctorDashboard.jsx'
import Patients from './pages/doctor/Patients.jsx'
import PatientDetails from './pages/doctor/PatientDetails.jsx'
import Visits from './pages/doctor/Visits.jsx'
import Messages from './pages/doctor/Messages.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/patients" element={<Patients />} />
      <Route path="/doctor/visits" element={<Visits />} />
      <Route path="/doctor/messages" element={<Messages />} />
      <Route path="/doctor/patients/:id" element={<PatientDetails />} />

     <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App