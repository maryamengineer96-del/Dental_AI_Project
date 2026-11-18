import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Messages.css'
function Messages() {
    const navigate = useNavigate()
    return (<div className="messages-page">
        <div className="messages-header">
            <div>
                <h1>الرسائل والمهام</h1>
                <p>التواصل ومتابعة المهام بين الطبيب والاستقبال</p>
            </div>
            <button
                className="back-dashboard-btn"
                onClick={() => navigate('/doctor/dashboard')}
            >
                العودة إلى لوحة الطبيب
            </button>
        </div>
        <div className="message-card">
            <div>
                <h3>موظفة الاستقبال</h3>
                <p>تم تأكيد موعد المريض أحمد محمد</p>
            </div>
            <span>09:30</span>
        </div>

        <div className="message-card">
            <div>
                <h3>موظفة الاستقبال</h3>
                <p>يرجى مراجعة ملف المريضة سارة خالد</p>
            </div>
            <span>10:15</span>
        </div>

    </div>
    )
}
export default Messages