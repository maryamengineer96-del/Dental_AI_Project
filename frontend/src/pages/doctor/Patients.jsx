import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import './Patients.css'
const initialPatients = [ { id: 1, name: 'أحمد محمد', phone: '0991234567', visits: 5, lastVisit: '2026/11/15', status: 'نشط', }, { id: 2, name: 'سارة خالد', phone: '0934567891', visits: 3, lastVisit: '2026/11/12', status: 'نشط', }, { id: 3, name: 'عمر محمود', phone: '0945678123', visits: 8, lastVisit: '2026/11/10', status: 'نشط', }, { id: 4, name: 'نور علي', phone: '0956781234', visits: 2, lastVisit: '2026/10/28', status: 'متابعة', }, { id: 5, name: 'ليان حسن', phone: '0987654321', visits: 4, lastVisit: '2026/10/20', status: 'متابعة', }, ]
function Patients() {
    const navigate = useNavigate()
     const [search, setSearch] = useState('') 
     const [patients, setPatients] = useState(initialPatients)
const [showAddForm, setShowAddForm] = useState(false)
 const [newPatientName, setNewPatientName] = useState('') 
 const [newPatientPhone, setNewPatientPhone] = useState('')
function handleAddPatient(event) { event.preventDefault()
if (!newPatientName.trim() || !newPatientPhone.trim()) {
  return
}

const newPatient = {
  id: Math.max(0, ...patients.map((p) => p.id)) + 1,
  name: newPatientName.trim(),
  phone: newPatientPhone.trim(),
  visits: 0,
  lastVisit: '-',
  status: 'نشط',
}

setPatients([...patients, newPatient])

setNewPatientName('')
setNewPatientPhone('')
setShowAddForm(false)
}
const filteredPatients = patients.filter( (patient) => patient.name.includes(search) || patient.phone.includes(search) )
return ( 
<div className="patients-page">
  {showAddForm && (
    <div className="patient-modal-overlay">
      <div className="patient-modal">
        <h2>إضافة مريض جديد</h2>

        <form onSubmit={handleAddPatient}>
          <label>الاسم الكامل</label>

          <input
            type="text"
            placeholder="أدخل اسم المريض"
            value={newPatientName}
            onChange={(event) =>
              setNewPatientName(event.target.value)
            }
            required
          />

          <label>رقم الهاتف</label>

          <input
            type="tel"
            placeholder="أدخل رقم الهاتف"
            value={newPatientPhone}
            onChange={(event) =>
              setNewPatientPhone(event.target.value)
            }
            required
          />

          <div className="patient-form-actions">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
            >
              إلغاء
            </button>

            <button type="submit">
              حفظ المريض
            </button>
          </div>
        </form>
      </div>
    </div>
  )}

  <div className="patients-header">
    <div>
      <h1>إدارة المرضى</h1>
      <p>إدارة ومتابعة الملفات الطبية للمرضى</p>
    </div>
      <button
        type="button"
        className="back-dashboard-btn"
        onClick={() => navigate('/doctor/dashboard')}
      >
        <span>←</span>
        العودة إلى لوحة الطبيب
      </button>
    <button
    
      className="add-patient-btn"
      onClick={() => setShowAddForm(true)}
    >
      + إضافة مريض جديد
    </button>
  </div>

  <div className="patients-stats">

    <div className="patient-stat-card">
      <span>إجمالي المرضى</span>
      <h2>{patients.length}</h2>
    </div>

    <div className="patient-stat-card">
      <span>المرضى النشطون</span>
      <h2>
        {patients.filter((p) => p.status === 'نشط').length}
      </h2>
    </div>

    <div className="patient-stat-card">
      <span>إجمالي الزيارات</span>
      <h2>
        {patients.reduce((total, p) => total + p.visits, 0)}
      </h2>
    </div>

  </div>

  <div className="patients-content">

    <div className="patients-toolbar">
      <h2>قائمة المرضى</h2>

      <input
        className="patients-search"
        type="text"
        placeholder="ابحث بالاسم أو رقم الهاتف..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>

    <div className="patients-table-wrapper">
      <table className="patients-table">

        <thead>
          <tr>
            <th>رقم</th>
            <th>اسم المريض</th>
            <th>رقم الهاتف</th>
            <th>عدد الزيارات</th>
            <th>آخر زيارة</th>
            <th>الحالة</th>
            <th>الملف</th>
          </tr>
        </thead>

        
                <tbody>
                    {filteredPatients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.visits}</td>
                            <td>{patient.lastVisit}</td>
                            <td>
                                <span className="patient-status">
                                    {patient.status}
                                </span>
                            </td>
                            <td>
                                <button
                                    className="patient-view-btn"
                                    onClick={() => navigate(`/doctor/patients/${patient.id}`)}
                                >
                                    عرض الملف
                                </button>
                            </td>
                        </tr>
                  )  )}
                </tbody>
            </table>
                </div>
            </div>
        </div>
    )
}
export default Patients