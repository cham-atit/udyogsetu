import { 
  Building2, ShieldCheck, Zap, Layers, Sparkles, CheckCircle, 
  ArrowRight, Landmark, FileText, Search, RefreshCw, Cpu, Award, ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export default function LandingPage({ onNavigate, onOpenQuickActions }) {
  const { demoLogin } = useAuth();
  const { t, lang } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingBottom: '32px' }}>
      
      {/* 1. RICH VIBRANT HERO SECTION */}
      <section style={{ 
        background: 'var(--primary-gradient)', 
        borderRadius: '24px', 
        padding: '64px 48px', 
        color: 'white',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.5)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <div style={{ position: 'absolute', right: '-60px', top: '-60px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: '-80px', bottom: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.25) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249, 115, 22, 0.2)', border: '1px solid rgba(249, 115, 22, 0.4)', padding: '6px 18px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: '700', color: '#ff8c00', width: 'fit-content', letterSpacing: '0.04em' }}>
            <Sparkles size={14} /> MAHARASHTRA INDUSTRIAL DIGITAL PUBLIC INFRASTRUCTURE
          </div>

          <h1 style={{ fontSize: '3.3rem', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-0.03em', color: '#ffffff' }}>
            {t('tagline')}<br />
            <span style={{ background: 'linear-gradient(90deg, #ff8c00 0%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem', fontWeight: '800' }}>
              {t('heroSubtitle')}
            </span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.65', maxWidth: '740px' }}>
            {lang === 'mr' ? 'आवश्यक वैधानिक परवानग्या शोधा, कागदपत्रांची आपोआप पडताळणी करा, एसएलए विलंब ट्रॅक करा आणि शासकीय योजनांचा लाभ घ्या — सर्व एकाच सोप्या व्यासपीठावरून.' : lang === 'hi' ? 'आवश्यक वैधानिक अनुमोदन खोजें, दस्तावेज़ों का स्वचालित सत्यापन करें, एसएलए विलंब ट्रैक करें और सरकारी योजनाओं का लाभ उठाएं।' : 'Discover mandatory statutory approvals, verify documents automatically, track live SLA delays, and access government subvention schemes — all from one unified intelligent engine.'}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px' }}>
            <button 
              className="btn btn-saffron" 
              style={{ padding: '16px 32px', fontSize: '1.05rem', borderRadius: '12px', fontWeight: '700' }}
              onClick={() => { demoLogin('entrepreneur'); onNavigate('onboarding'); }}
            >
              {t('startNewApp')} <ArrowRight size={18} />
            </button>

            <button 
              className="btn btn-outline" 
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', padding: '16px 28px', fontSize: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.08)' }}
              onClick={() => { demoLogin('entrepreneur'); onNavigate('approvals'); }}
            >
              {t('findService')}
            </button>
          </div>
        </div>
      </section>

      {/* 2. ELEGANT QUICK ACTIONS WITH COLOURFUL CARDS */}
      <section>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>{t('quickServices')}</h2>
          <p style={{ color: '#64748b', fontSize: '0.92rem' }}>{t('exploreHowItWorks')}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { 
              icon: Search, 
              title: t('approvals'), 
              desc: lang === 'mr' ? 'कारखान्यासाठी आवश्यक परवानग्या शोधा' : lang === 'hi' ? 'अपने कारखाने के लिए आवश्यक परमिट खोजें' : 'Discover required statutory permits & NOCs for your plant',
              tab: 'approvals',
              color: '#3b82f6',
              bg: '#eff6ff'
            },
            { 
              icon: FileText, 
              title: t('applications'), 
              desc: lang === 'mr' ? 'थेट स्थिती आणि एसएलए विलंब तपासा' : lang === 'hi' ? 'सक्रिय फाइलों पर लाइव स्थिति और एसएलए विलंब जांचें' : 'Check live status & SLA delay diagnosis on active files',
              tab: 'applications',
              color: '#ea580c',
              bg: '#fff7ed'
            },
            { 
              icon: Landmark, 
              title: t('schemes'), 
              desc: lang === 'mr' ? 'शासकीय योजना आणि अनुदाने शोधा' : lang === 'hi' ? 'सब्सिडी और पीएसआई 2019 प्रोत्साहनों का लाभ उठाएं' : 'Explore subsidy eligibility & PSI 2019 incentives',
              tab: 'schemes',
              color: '#ec4899',
              bg: '#fdf2f8'
            },
            { 
              icon: RefreshCw, 
              title: t('compliance'), 
              desc: lang === 'mr' ? 'परवाना नूतनीकरण ट्रॅक करा' : lang === 'hi' ? 'लाइसेंस नवीनीकरण का प्रबंधन करें' : 'Monitor license renewals & continuous filings',
              tab: 'compliance',
              color: '#10b981',
              bg: '#ecfdf5'
            }
          ].map((act, idx) => {
            const IconComp = act.icon;
            return (
              <div 
                key={idx}
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  padding: '26px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justify: 'space-between',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => { demoLogin('entrepreneur'); onNavigate(act.tab); }}
              >
                <div>
                  <div style={{ background: act.bg, color: act.color, width: 48, height: 48, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', border: `1px solid ${act.color}25` }}>
                    <IconComp size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{act.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: '1.5' }}>{act.desc}</p>
                </div>

                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: '800', color: act.color }}>
                  <span>{t('findService')}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CORE PLATFORM DIFFERENTIATORS */}
      <section className="card" style={{ padding: '44px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span style={{ color: '#ea580c', fontWeight: '800', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Platform Innovation</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginTop: '6px', letterSpacing: '-0.02em' }}>UdyogSetu Intelligence Engine</h2>
          <p style={{ color: '#64748b', marginTop: '8px', fontSize: '1rem', lineHeight: '1.6' }}>
            An active regulatory engine that transforms how industrial permissions are discovered, applied for, and approved.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#f8fafc', padding: '28px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
            <div style={{ background: '#e0e7ff', color: '#4f46e5', width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Layers size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a' }}>Approval Dependency Graph</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '8px', lineHeight: '1.55' }}>
              Parallel clearance optimizer identifying concurrent approvals to cut statutory timelines by up to 51%.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '28px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
            <div style={{ background: '#dcfce7', color: '#10b981', width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a' }}>AI Document Pre-Validation</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '8px', lineHeight: '1.55' }}>
              Automatic extraction & cross-checking across PAN, GST, and land titles to catch address mismatches early.
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '28px', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
            <div style={{ background: '#ffedd5', color: '#ea580c', width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Zap size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a' }}>SLA & Delay Diagnosis</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '8px', lineHeight: '1.55' }}>
              Root-cause analysis answering "Why is my application delayed?" with step-by-step guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DEMO ROLE LOGIN SWITCHER */}
      <section style={{ background: 'var(--primary-gradient)', borderRadius: '24px', padding: '44px 36px', color: 'white', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.4)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}>Try UdyogSetu Demo Accounts</h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.96rem', marginTop: '4px' }}>1-Click demo access for national hackathon evaluators</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '18px', padding: '26px', border: '1px solid rgba(255,255,255,0.14)' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '6px', color: '#ff8c00' }}>🏢 Entrepreneur</div>
            <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '24px', lineHeight: '1.5' }}>Sahyadri Foods Pvt. Ltd. • Chakan Phase II • 12 Approvals • 82% Readiness</div>
            <button className="btn btn-saffron" style={{ width: '100%', padding: '13px' }} onClick={() => { demoLogin('entrepreneur'); onNavigate('dashboard'); }}>
              Enter Entrepreneur Portal
            </button>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '18px', padding: '26px', border: '1px solid rgba(255,255,255,0.14)' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '6px', color: '#818cf8' }}>👮 Govt Officer</div>
            <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '24px', lineHeight: '1.5' }}>MPCB Senior Scrutiny Officer • 128 Work Queue • Risk Scrutiny</div>
            <button className="btn btn-primary" style={{ width: '100%', background: '#4f46e5', padding: '13px' }} onClick={() => { demoLogin('officer'); onNavigate('officer-dashboard'); }}>
              Enter Officer Portal
            </button>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '18px', padding: '26px', border: '1px solid rgba(255,255,255,0.14)' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '6px', color: '#34d399' }}>⚙️ Administrator</div>
            <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '24px', lineHeight: '1.5' }}>State DPI Metrics • Department Performance • Delay Heatmaps</div>
            <button className="btn btn-outline" style={{ width: '100%', color: 'white', borderColor: 'rgba(255,255,255,0.3)', padding: '13px' }} onClick={() => { demoLogin('admin'); onNavigate('admin-dashboard'); }}>
              Enter Admin Portal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

