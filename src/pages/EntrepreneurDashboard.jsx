import { useApp } from '../context/AppContext';
import { 
  Building2, CheckCircle2, AlertTriangle, Clock, ArrowRight, 
  Sparkles, FileText, Zap, ShieldCheck, HelpCircle, Layers, Award,
  Search, Landmark, RefreshCw, ChevronRight, Check
} from 'lucide-react';

export default function EntrepreneurDashboard({ onNavigate, onOpenQuickActions }) {
  const { business, approvals, documents, applications, schemes, calculateReadinessScore, simpleMode, resolveApplicationQuery, t, lang } = useApp();
  const readiness = calculateReadinessScore();

  const activeApprovals = approvals.filter(a => a.status === 'in-progress' || a.status === 'action-required').length;
  const completedApprovals = approvals.filter(a => a.status === 'completed').length;
  const totalApprovals = approvals.length;
  const progressPercent = Math.round((completedApprovals / totalApprovals) * 100);

  const pendingQueryApp = applications.find(a => a.query);
  const topSchemes = schemes.slice(0, 3);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: simpleMode ? '24px' : '32px' }}>
      
      {/* SIMPLE MODE ACTIVE BANNER */}
      {simpleMode && (
        <div style={{ 
          background: 'linear-gradient(135deg, #059669, #047857)', 
          color: 'white', 
          padding: '14px 20px', 
          borderRadius: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between',
          fontSize: '0.9rem',
          fontWeight: '600',
          boxShadow: '0 4px 14px rgba(5, 150, 105, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>💡</span>
            <span><strong>Simple Mode Active:</strong> Regulatory terminology simplified into plain everyday language. Visual clutter reduced.</span>
          </div>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ON</span>
        </div>
      )}

      {/* 1. HERO SECTION (WHO AM I? WHAT NEEDS ATTENTION? WHAT CAN I DO NEXT?) */}
      <section style={{ 
        background: 'var(--primary-gradient)', 
        borderRadius: '24px', 
        padding: simpleMode ? '30px 32px' : '42px', 
        color: 'white',
        boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(249, 115, 22, 0.2)', border: '1px solid rgba(249, 115, 22, 0.4)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', color: '#ff8c00' }}>
              <Building2 size={14} /> {simpleMode ? 'Food Business' : business.category}
            </div>
            <h1 style={{ fontSize: simpleMode ? '2rem' : '2.3rem', fontWeight: '800', marginTop: '10px', color: 'white', letterSpacing: '-0.02em' }}>
              {t('goodMorning') || 'Good morning'}, {business.promoterName} 👋
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '4px' }}>
              <strong>{business.name}</strong> • {business.district}, Maharashtra
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '24px' }}>
              <button 
                className="btn btn-saffron"
                style={{ padding: '12px 24px', borderRadius: '10px', fontSize: '0.95rem', fontWeight: '700' }}
                onClick={() => onNavigate('onboarding')}
              >
                {t('startNewApp')} <ArrowRight size={16} />
              </button>

              <button 
                className="btn btn-outline btn-outline-on-dark"
                style={{ borderColor: 'rgba(255,255,255,0.25)', padding: '12px 20px', borderRadius: '10px', fontSize: '0.95rem' }}
                onClick={() => onNavigate('approvals')}
              >
                {t('findService')}
              </button>
            </div>
          </div>

          {/* Journey Completion Badge */}
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', padding: '20px 28px', textAlign: 'center', minWidth: '220px' }}>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600' }}>{t('overallJourneyProgress')}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#fbbf24', margin: '4px 0' }}>{progressPercent}%</div>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{completedApprovals} / {totalApprovals} Completed</div>
          </div>
        </div>
      </section>

      {/* 2. 4 QUICK ACTIONS */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            { 
              icon: Search, 
              title: t('approvals'), 
              desc: lang === 'mr' ? 'कारखान्यासाठी आवश्यक परवानग्या शोधा' : lang === 'hi' ? 'अपने कारखाने के लिए परमिट खोजें' : 'Discover permits for your factory',
              tab: 'approvals',
              color: '#3b82f6'
            },
            { 
              icon: FileText, 
              title: t('applications'), 
              desc: lang === 'mr' ? 'थेट स्थिती आणि वेळ तपासा' : lang === 'hi' ? 'लाइव स्थिति और समय सीमा जांचें' : 'Check live status & SLA timelines',
              tab: 'applications',
              color: '#d97706'
            },
            { 
              icon: Landmark, 
              title: t('schemes'), 
              desc: lang === 'mr' ? 'अनुदान आणि प्रोत्साहन पाहा' : lang === 'hi' ? 'सब्सिडी और प्रोत्साहन देखें' : 'View subsidies & PSI incentives',
              tab: 'schemes',
              color: '#ec4899'
            },
            { 
              icon: RefreshCw, 
              title: t('compliance'), 
              desc: lang === 'mr' ? 'परवाना नूतनीकरण ट्रॅक करा' : lang === 'hi' ? 'लाइसेंस नवीनीकरण ट्रैक करें' : 'Track license expiry & renewals',
              tab: 'compliance',
              color: '#059669'
            }
          ].map((act, idx) => {
            const IconComp = act.icon;
            return (
              <div 
                key={idx}
                className="card"
                style={{ 
                  cursor: 'pointer', 
                  padding: '20px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'space-between',
                  border: '1px solid #e2e8f0'
                }}
                onClick={() => onNavigate(act.tab)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ background: `${act.color}15`, color: act.color, width: 42, height: 42, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a' }}>{act.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{act.desc}</p>
                  </div>
                </div>
                <ChevronRight size={18} color="#94a3b8" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTELLIGENT GUIDANCE — YOUR NEXT BEST ACTION */}
      <section className="card" style={{ borderLeft: '6px solid #d97706', background: '#fffbeb', padding: '28px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontWeight: '800', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <Sparkles size={16} color="#d97706" /> {t('udyogsetuIntelligence')} • {t('nextBestAction')}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '16px' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#78350f' }}>
              {simpleMode 
                ? 'Pollution Clearance for Factory Construction' 
                : 'MPCB Pollution Consent to Establish (CTE)'}
            </h3>
            <p style={{ color: '#92400e', fontSize: '0.92rem', marginTop: '6px', lineHeight: '1.5' }}>
              {simpleMode
                ? 'Action Required: Re-upload 2 layout documents with correct factory address to get fast approval.'
                : lang === 'mr' 
                  ? 'तुमच्या अर्जाला २ कागदपत्र सुधारणांची वाट पाहावी लागत आहे (ETP लेआउट पत्ता सुसंगतता). सुधारित कागदपत्रे अपलोड केल्याने तपासणी त्वरित सुरू होईल.' 
                  : lang === 'hi' 
                    ? 'आपके आवेदन को 2 दस्तावेज़ अद्यतनों की प्रतीक्षा है (ETP लेआउट पता संगति)। सुधारित दस्तावेज़ अपलोड करने से जांच तुरंत फिर शुरू हो जाएगी।' 
                    : 'Your application is waiting for 2 document updates (ETP Layout address consistency). Uploading corrected documents will unblock department scrutiny immediately.'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              className="btn btn-saffron"
              style={{ padding: '12px 20px', borderRadius: '10px', fontSize: '0.9rem' }}
              onClick={() => {
                if (pendingQueryApp) resolveApplicationQuery(pendingQueryApp.appId);
                onNavigate('applications');
              }}
            >
              {t('completeNow')} <ArrowRight size={16} />
            </button>

            <button 
              className="btn btn-outline"
              style={{ padding: '12px 18px', borderRadius: '10px', fontSize: '0.9rem', borderColor: '#d97706', color: '#78350f' }}
              onClick={() => onNavigate('applications')}
            >
              {t('viewApp')}
            </button>
          </div>
        </div>
      </section>

      {/* 4. CLEAN HORIZONTAL APPLICATION PROGRESS TIMELINE */}
      <section className="card" style={{ padding: '28px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 className="card-title" style={{ margin: 0, fontSize: '1.2rem' }}>
              <Clock size={20} color="#1e40af" /> {lang === 'mr' ? 'अर्ज जीवनचक्र प्रगती' : lang === 'hi' ? 'आवेदन जीवनचक्र प्रगति' : 'Application Lifecycle Progress'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Application #MH-DEMO-20482</p>
          </div>

          <button className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.82rem' }} onClick={() => onNavigate('applications')}>
            {t('viewApp')}
          </button>
        </div>

        {/* Clean Horizontal Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          {[
            { step: lang === 'mr' ? '१. सादर केले' : lang === 'hi' ? '1. प्रस्तुत' : '1. Submitted', date: '10 Aug 2026', status: 'completed' },
            { step: lang === 'mr' ? '२. कागदपत्रे' : lang === 'hi' ? '2. दस्तावेज़' : '2. Documents', date: '12 Aug 2026', status: 'completed' },
            { step: lang === 'mr' ? '३. पुनरावलोकनाधीन' : lang === 'hi' ? '3. समीक्षाधीन' : '3. Under Review', date: 'In Scrutiny', status: 'active' },
            { step: lang === 'mr' ? '४. मंजूर' : lang === 'hi' ? '4. स्वीकृत' : '4. Approved', date: 'Est: 15 Sep', status: 'pending' }
          ].map((st, idx) => (
            <div key={idx} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: 32, 
                height: 32, 
                borderRadius: '50%', 
                background: st.status === 'completed' ? '#059669' : st.status === 'active' ? '#d97706' : '#e2e8f0', 
                color: st.status === 'pending' ? '#64748b' : 'white',
                display: 'flex', 
                alignItems: 'center', 
                justify: 'center', 
                margin: '0 auto 8px',
                fontWeight: '700',
                fontSize: '0.85rem'
              }}>
                {st.status === 'completed' ? <Check size={16} /> : idx + 1}
              </div>
              <div style={{ fontWeight: '700', fontSize: '0.88rem', color: st.status === 'active' ? '#d97706' : '#0f172a' }}>{st.step}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{st.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TOP 3 GOVERNMENT SCHEMES */}
      <section className="card" style={{ padding: '28px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 className="card-title" style={{ margin: 0, fontSize: '1.2rem' }}>
              <Landmark size={20} color="#ec4899" /> {t('recommendedSchemes')}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Pune Agro-processing Industry</p>
          </div>

          <button className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.82rem' }} onClick={() => onNavigate('schemes')}>
            {t('schemes')}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {topSchemes.map(sch => (
            <div key={sch.id} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="badge badge-info" style={{ fontSize: '0.7rem' }}>{sch.category}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#059669' }}>{sch.matchPercentage}% Match</span>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>{sch.name}</h4>
                <div style={{ fontSize: '0.82rem', color: '#475569', background: '#f8fafc', padding: '8px 12px', borderRadius: '8px', margin: '10px 0' }}>
                  <strong>Benefit:</strong> {sch.benefits}
                </div>
              </div>

              <button 
                className="btn btn-outline" 
                style={{ width: '100%', padding: '8px', fontSize: '0.82rem', marginTop: '12px' }}
                onClick={() => onNavigate('schemes')}
              >
                View Details <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
