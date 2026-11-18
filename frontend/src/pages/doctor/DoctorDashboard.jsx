import './DoctorDashboard.css'
console.log('Doctor Dashboard Loaded')
function DoctorDashboard() { const stats = [ { icon: '👥', label: 'إجمالي المرضى', value: '1,284', change: '+12%' }, { icon: '📅', label: 'مواعيد اليوم', value: '18', change: 'مواعيد مؤكدة' }, { icon: '🦷', label: 'زيارات اليوم', value: '12', change: 'زيارة مسجلة' }, { icon: '⏳', label: 'بانتظار المراجعة', value: '06', change: 'تحتاج متابعة' }, ]
const appointments = [ { name: 'سارة أحمد', service: 'تنظيف الأسنان', time: '09:00', status: 'مكتمل', type: 'completed' }, { name: 'محمد خالد', service: 'علاج عصب', time: '10:30', status: 'بانتظار', type: 'waiting' }, { name: 'ليان محمود', service: 'فحص دوري', time: '11:00', status: 'بانتظار', type: 'waiting' }, { name: 'عمر حسن', service: 'تبييض الأسنان', time: '12:30', status: 'مكتمل', type: 'completed' }, ]
return ( <div className="doctor-layout" dir="rtl"> <aside className="doctor-sidebar"> <div className="doctor-brand"> <div className="brand-icon">✦</div> <div> <h2>DentAI</h2> <span>SMART DENTAL CLINIC</span> </div> </div>
    <div className="sidebar-section">
      <p className="sidebar-label">القائمة الرئيسية</p>

      <nav className="doctor-nav">
        <a href="/doctor/dashboard" className="active">⌂ <span>الرئيسية</span></a>
        <a href="/doctor/patients">♙ <span>المرضى</span></a>
        <a href="/doctor/visits">▣ <span>الزيارات الطبية</span></a>
        <a href="/doctor/treatment-plans">✚ <span>الخطط العلاجية</span></a>
        <a href="/doctor/ai-analysis">✧ <span>تحليل الذكاء الاصطناعي</span></a>
        <a href="/doctor/images">▧ <span>صور الأسنان</span></a>
        <a href="/doctor/appointments">▦ <span>المواعيد</span></a>
        <a href="/doctor/messages">✉️ <span>الرسائل والمهام</span></a>
      </nav>
    </div>

    <div className="sidebar-footer">
      <div className="doctor-avatar">د</div>
      <div>
        <strong>د. أحمد محمد</strong>
        <span>طبيب الأسنان</span>
      </div>
    </div>
  </aside>

  <main className="doctor-main">
    <header className="doctor-header">
      <div>
        <span className="welcome-label">لوحة تحكم الطبيب</span>
        <h1>مرحباً بعودتك، دكتور 👋</h1>
        <p>إليك ملخص نشاط العيادة اليوم.</p>
      </div>

      <div className="header-actions">
        <button className="notification-button">♧</button>
        <div className="header-date">الثلاثاء، 17 نوفمبر 2026</div>
      </div>
    </header>

    <section className="doctor-stats">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon">{stat.icon}</div>
          <p>{stat.label}</p>
          <h2>{stat.value}</h2>
          <span>{stat.change}</span>
        </div>
      ))}
    </section>

    <section className="dashboard-content">
      <div className="dashboard-panel appointments-panel">
        <div className="panel-heading">
          <div>
            <h2>مواعيد اليوم</h2>
            <p>متابعة مواعيد المرضى اليومية</p>
          </div>
          <a href="/doctor/appointments">عرض الكل ←</a>
        </div>

        <div className="appointments-list">
          {appointments.map((appointment, index) => (
            <div className="appointment-row" key={index}>
              <div className="patient-avatar">
                {appointment.name.charAt(0)}
              </div>

              <div className="patient-info">
                <strong>{appointment.name}</strong>
                <span>{appointment.service}</span>
              </div>

              <span className="appointment-time">
                {appointment.time}
              </span>

              <span className={`status ${appointment.type}`}>
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-panel ai-panel">
        <div className="ai-symbol">✧</div>
        <span className="ai-highlight">DENTAI INTELLIGENCE</span>
        <h2>المساعد الذكي</h2>
        <p>
          راجع نتائج التحليلات الذكية للمرضى،
          وقم بمراجعة التوصيات قبل اعتمادها.
        </p>
        
<div className="ai-summary">
          <span>تحليلات بانتظار المراجعة</span>
          <strong>06</strong>
        </div>

        <a href="/doctor/ai-analysis" className="ai-link">
          مراجعة التحليلات ←
        </a>
      </div>
    </section>
  </main>
</div>
) }
export default DoctorDashboard