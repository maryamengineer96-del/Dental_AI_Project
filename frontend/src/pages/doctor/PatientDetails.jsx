import { useParams, useNavigate } from 'react-router-dom' 
import './PatientDetails.css'
function PatientDetails() {
    const { id } = useParams() 
    const navigate = useNavigate()
    return (<div className="patient-details-page"> <div className="patient-details-header"> <button onClick={() => navigate('/doctor/patients')}> ← العودة إلى المرضى </button>
        <h1>ملف المريض</h1>
        <p>رقم المريض: {id}</p>
    </div>

        <div className="patient-details-card">
            <div className="patient-profile-icon">👤</div>

            <h2>بيانات المريض</h2>

            <div className="patient-info-grid">
                <div>
                    <span>الاسم الكامل</span>
                    <strong>سيتم تحميل بيانات المريض</strong>
                </div>

                <div>
                    <span>رقم الهاتف</span>
                    <strong>غير متوفر حالياً</strong>
                </div>

                <div>
                    <span>عدد الزيارات</span>
                    <strong>0</strong>
                </div>

                <div>
                    <span>آخر زيارة</span>
                    <strong>-</strong>
                </div>
            </div>
        </div>

        <div className="patient-details-card">
            <h2>السجل الطبي</h2>
            <p>لا توجد زيارات مسجلة حالياً.</p>
        </div>
    </div>
    )
}
export default PatientDetails