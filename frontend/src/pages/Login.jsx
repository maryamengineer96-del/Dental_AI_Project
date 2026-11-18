import './Login.css'
import { Link } from 'react-router-dom'
function Login() { return ( <main className="login-page" dir="rtl"> <section className="login-card">
    <div className="login-brand">
      <div className="login-logo">✦</div>
      <h1>Dental AI</h1>
      <p>المساعد الذكي لطب الأسنان</p>
    </div>

    <div className="login-heading">
      <h2>مرحباً بعودتك</h2>
      <p>سجّل الدخول للوصول إلى حسابك</p>
    </div>

    <form className="login-form">
      <label htmlFor="email">البريد الإلكتروني</label>
      <input
        id="email"
        type="email"
        placeholder="example@email.com"
      />

      <label htmlFor="password">كلمة المرور</label>
      <input
        id="password"
        type="password"
        placeholder="أدخل كلمة المرور"
      />

      <div className="login-options">
        <label className="remember-me">
          <input type="checkbox" />
          تذكرني
        </label>
        <a href="#forgot">نسيت كلمة المرور؟</a>
      </div>

      <button type="submit">تسجيل الدخول</button>
    </form>

    <div className="login-footer">
      <span>نظام إدارة العيادة الذكية</span>
      <span>AI Smart Dental Assistant</span>
    </div>
<Link to="/" className="back-home">
  ← العودة إلى الصفحة الرئيسية
</Link>

  </section>
</main>
) }
export default Login