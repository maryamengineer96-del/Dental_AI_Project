import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import './Visits.css'
function Visits() {
    const navigate = useNavigate()
    const [visits, setVisits] = useState([{ id: 1, patient: 'أحمد محمد', date: '2026-11-17', service: 'تنظيف الأسنان', status: 'مكتملة', notes: 'تم تنظيف الأسنان وإزالة الجير', }, { id: 2, patient: 'سارة خالد', date: '2026-11-16', service: 'حشو الأسنان', status: 'مكتملة', notes: 'حشو الضرس الخلفي', }, { id: 3, patient: 'محمد علي', date: '2026-11-17', service: 'فحص دوري', status: 'قيد المعالجة', notes: 'فحص أولي للأسنان', }, { id: 4, patient: 'نور حسن', date: '2026-11-15', service: 'علاج عصب', status: 'مكتملة', notes: 'جلسة علاج عصب', },])
    const [showAddForm, setShowAddForm] = useState(false)
    const [newVisit, setNewVisit] = useState({ patient: '', date: '', service: '', notes: '', status: 'مكتملة', })
    const handleAddVisit = (e) => {
        e.preventDefault()
        const visit = {
            id: Date.now(),
            ...newVisit,
        }

        setVisits((prev) => [...prev, visit])

        setNewVisit({
            patient: '',
            date: '',
            service: '',
            notes: '',
            status: 'مكتملة',
        })

        setShowAddForm(false)
    }
    return (<div className="visits-page">
        <div className="visits-header">
            <div>
                <h1>إدارة الزيارات</h1>
                <p>متابعة وتنظيم الزيارات الطبية للمرضى</p>
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
                className="add-visit-btn"
                onClick={() => setShowAddForm(true)}
            >
                + إضافة زيارة جديدة
            </button>
        </div>

        {showAddForm && (
            <div className="visit-modal-overlay">
                <div className="visit-modal">
                    <h2>إضافة زيارة جديدة</h2>
                    <p>أدخلي بيانات الزيارة الطبية</p>

                    <form onSubmit={handleAddVisit}>

                        <label>اسم المريض</label>
                        <input
                            type="text"
                            placeholder="اسم المريض"
                            value={newVisit.patient}
                            onChange={(e) =>
                                setNewVisit({ ...newVisit, patient: e.target.value })
                            }
                            required
                        />

                        <label>تاريخ الزيارة</label>
                        <input
                            type="date"
                            value={newVisit.date}
                            onChange={(e) =>
                                setNewVisit({ ...newVisit, date: e.target.value })
                            }
                            required
                        />

                        <label>الخدمة الطبية</label>
                        <input
                            type="text"
                            placeholder="مثلاً: تنظيف الأسنان"
                            value={newVisit.service}
                            onChange={(e) =>
                                setNewVisit({ ...newVisit, service: e.target.value })
                            }
                            required
                        />

                        <label>ملاحظات الطبيب</label>
                        <textarea
                            placeholder="ملاحظات الزيارة"
                            value={newVisit.notes}
                            onChange={(e) =>
                                setNewVisit({ ...newVisit, notes: e.target.value })
                            }
                        />

                        <label>حالة الزيارة</label>
                        <select
                            value={newVisit.status}
                            onChange={(e) =>
                                setNewVisit({ ...newVisit, status: e.target.value })
                            }
                        >
                            <option value="مكتملة">مكتملة</option>
                            <option value="قيد المعالجة">قيد المعالجة</option>
                        </select>

                        <div className="visit-form-actions">
                            <button type="submit">حفظ الزيارة</button>

                            <button
                                type="button"
                                onClick={() => setShowAddForm(false)}
                            >
                                إلغاء
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )}

        <div className="visits-stats">

            <div className="visit-stat-card">
                <span>إجمالي الزيارات</span>
                <strong>{visits.length}</strong>
            </div>

            <div className="visit-stat-card">
                <span>الزيارات المكتملة</span>
                <strong>
                    {visits.filter((v) => v.status === 'مكتملة').length}
                </strong>
            </div>

            <div className="visit-stat-card">
                <span>قيد المعالجة</span>
                <strong>
                    {visits.filter((v) => v.status === 'قيد المعالجة').length}
                </strong>
            </div>

        </div>

        <div className="visits-content">
            <h2>سجل الزيارات</h2>

            <div className="visits-table-wrapper">
                <table className="visits-table">

                    <thead>
                        <tr>
                            <th>رقم الزيارة</th>
                            <th>اسم المريض</th>
                            <th>التاريخ</th>
                            <th>الخدمة الطبية</th>
                            <th>ملاحظات الطبيب</th>
                            <th>الحالة</th>
                        </tr>
                    </thead>

                    <tbody>
                        {visits.map((visit) => (
                            <tr key={visit.id}>
                                <td>#{visit.id}</td>
                                <td>{visit.patient}</td>
                                <td>{visit.date}</td>
                                <td>{visit.service}</td>
                                <td>{visit.notes || '-'}</td>
                                <td>
                                    <span
                                        className={`visit-status ${visit.status === 'مكتملة'
                                                ? 'completed'
                                                : 'pending'
                                            }`}
                                    >
                                        {visit.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>

    </div>
    )
}
export default Visits