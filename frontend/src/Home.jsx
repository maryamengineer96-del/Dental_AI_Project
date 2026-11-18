import './App.css'
import { Link } from 'react-router-dom'
function Home() { const services = [ { icon: '📅', title: 'حجز المواعيد', description: 'إمكانية حجز المواعيد بسهولة واختيار الوقت المناسب للزيارة.', }, { icon: '🤖', title: 'المساعد الذكي', description: 'التواصل مع المساعد الذكي للحصول على إرشادات وإجابات أولية.', }, { icon: '🦷', title: 'الخدمات السنية', description: 'التعرف على خدمات العناية والعلاج المتوفرة في العيادة.', }, { icon: '📋', title: 'متابعة الزيارات', description: 'عرض المواعيد السابقة والقادمة وسجل الزيارات.', }, ]
const steps = [ { number: '01', icon: '👤', title: 'إنشاء حساب', description: 'إنشاء حساب للوصول إلى الخدمات الرقمية الخاصة بالعيادة.', }, { number: '02', icon: '💬', title: 'اختيار الخدمة', description: 'اختيار الخدمة المطلوبة أو التواصل مع المساعد الذكي.', }, { number: '03', icon: '📅', title: 'حجز موعد', description: 'اختيار الموعد المناسب ومتابعة تفاصيل الزيارة.', }, ]
return ( <div className="website" dir="rtl">
  {/* Header */}
  <header className="header">
    <div className="container nav-container">

      <a href="#home" className="brand">
        <span className="brand-logo">🦷</span>
        <span className="brand-name">
          <strong>Dental AI</strong>
          <small>المساعد السني الذكي</small>
        </span>
      </a>
<nav className="navigation">
  <a href="#home">الرئيسية</a>
  <a href="#services">خدماتنا</a>
  <a href="#about">عن النظام</a>
  <a href="#how">كيف يعمل؟</a>
  <Link to="/login" className="login-link">
    تسجيل الدخول
  </Link>
</nav>

      <a href="#start" className="header-button">
        ابدأ الآن
      </a>

    </div>
  </header>

  <main>

    {/* Hero Section */}
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">
          <span className="hero-label">
            ✨ مستقبل الرعاية السنية الرقمية
          </span>

          <h1>
            ابتسامتك تستحق
            <span> عناية أكثر ذكاءً</span>
          </h1>

          <p>
            مرحباً بكم في Dental AI، منصتكم الرقمية
            للتواصل مع عيادة الأسنان وتنظيم المواعيد
            والاستفادة من تقنيات الذكاء الاصطناعي
            لتجربة أكثر سهولة وراحة.
          </p>

          <div className="hero-buttons">
            <a href="#start" className="primary-button">
              ابدأ رحلتك الآن
              <span>←</span>
            </a>

            <a href="#services" className="secondary-button">
              استكشف خدماتنا
            </a>
          </div>

          <div className="hero-benefits">
            <span>✓ تجربة سهلة</span>
            <span>✓ تنظيم أفضل</span>
            <span>✓ تقنيات ذكية</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>

          <div className="main-dental-card">
            <div className="dental-card-header">
              <span>Dental AI Assistant</span>
              <span className="online-status">● متاح</span>
            </div>

            <div className="dental-illustration">🦷</div>

            <h2>ابتسامتك أولويتنا</h2>
            <p>رعاية رقمية تبدأ من هنا</p>

            <div className="dental-card-footer">
              <span>SMART DENTAL CARE</span>
              <span>✦</span>
            </div>
          </div>

          <div className="floating-info appointment-info">
            <span className="floating-icon">📅</span>
            <div>
              <strong>حجز المواعيد</strong>
              <small>بسهولة وسرعة</small>
            </div>
          </div>

          <div className="floating-info assistant-info">
            <span className="floating-icon">🤖</span>
            <div>
              <strong>المساعد الذكي</strong>
              <small>للاستفسارات والإرشاد</small>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Services */}
    <section className="services section" id="services">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            خدماتنا الرقمية
          </span><h2>كل ما يلزم في مكان واحد</h2>

          <p>
            مجموعة من الخدمات المصممة لتسهيل التعامل مع العيادة.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#start">
                المزيد عن الخدمة ←
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>

    {/* About */}
    <section className="about section" id="about">
      <div className="container about-container">

        <div className="about-visual">
          <div className="ai-circle">
            <span>🤖</span>
            <strong>AI</strong>
            <small>SMART ASSISTANT</small>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">
            عن مشروعنا
          </span>

          <h2>
            عندما تلتقي الرعاية السنية
            <span> بالذكاء الاصطناعي</span>
          </h2>

          <p>
            يهدف نظام المساعد السني الذكي إلى تطوير تجربة
            المراجعين داخل العيادة من خلال توفير واجهة رقمية
            تساعد على الوصول إلى الخدمات وتنظيم المواعيد
            والاستفادة من تقنيات الذكاء الاصطناعي.
          </p>

          <ul className="about-list">
            <li>
              <span>✓</span>
              واجهة سهلة وواضحة للاستخدام
            </li>
            <li>
              <span>✓</span>
              تنظيم المواعيد والزيارات
            </li>
            <li>
              <span>✓</span>
              دعم الاستفسارات بواسطة المساعد الذكي
            </li>
            <li>
              <span>✓</span>
              تجربة رقمية منظمة
            </li>
          </ul>

          <a href="#how" className="primary-button">
            استكشف النظام
          </a>
        </div>

      </div>
    </section>

    {/* How It Works */}
    <section className="how section" id="how">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            خطوات بسيطة
          </span>

          <h2>كيف تتم الاستفادة من خدماتنا؟</h2>

          <p>
            ثلاث خطوات للوصول إلى خدمات العيادة الرقمية.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article
              className="step-card"
              key={step.number}
            >
              <span className="step-number">
                {step.number}
              </span>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>

    {/* Call To Action */}
    <section className="start-section" id="start">
      <div className="container start-container">

        <div>
          <span>نحن هنا للمساعدة</span>

          <h2>نحو رعاية سنية أكثر ذكاءً</h2>

          <p>
            استكشف خدمات العيادة واستفد من تجربة رقمية سهلة ومنظمة.
          </p>
        </div>

        <a href="#home" className="start-button">
          العودة للرئيسية ↑
        </a>

      </div>
    </section>

  </main>

  {/* Footer */}
  <footer className="footer">
    <div className="container footer-container">

      <a href="#home" className="brand footer-brand">
        <span className="brand-logo">🦷</span>

        <span className="brand-name">
          <strong>Dental AI</strong>
          <small>المساعد السني الذكي</small>
        </span>
      </a>

      <p>
        © 2026 Dental AI Smart Assistant
      </p>

      <a href="#home">
        العودة للأعلى ↑
      </a>

    </div>
  </footer>

</div>
) }
export default Home