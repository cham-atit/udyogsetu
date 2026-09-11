import { useState } from 'react';
import { 
  Building2, ClipboardList, Search, RefreshCw, Landmark, 
  HelpCircle, X, ArrowRight, ShieldAlert, CheckCircle, FileText
} from 'lucide-react';

export default function QuickActionsModal({ isOpen, onClose, onNavigate }) {
  const [activeHelpTopic, setActiveHelpTopic] = useState(null);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'start-business',
      icon: Building2,
      title: '🏭 Start a New Business',
      desc: 'Generate your customized step-by-step approval journey for a new industrial project.',
      targetTab: 'onboarding',
      color: '#3b82f6'
    },
    {
      id: 'find-approvals',
      icon: ClipboardList,
      title: '📋 Find My Approvals',
      desc: 'Browse mandatory and conditional clearances required for your industry & location.',
      targetTab: 'approvals',
      color: '#d97706'
    },
    {
      id: 'track-application',
      icon: Search,
      title: '🔍 Track My Application',
      desc: 'Check live status, inspect bottlenecks, resolve queries, and monitor SLA timelines.',
      targetTab: 'applications',
      color: '#10b981'
    },
    {
      id: 'renew-license',
      icon: RefreshCw,
      title: '🔄 Renew a License',
      desc: 'Manage upcoming factory, pollution, and fire safety license renewals.',
      targetTab: 'compliance',
      color: '#8b5cf6'
    },
    {
      id: 'find-support',
      icon: Landmark,
      title: '💰 Find Government Support',
      desc: 'Discover capital subsidies, interest rebates, and green incentives matching your business.',
      targetTab: 'schemes',
      color: '#ec4899'
    }
  ];

  const helpTopics = [
    {
      title: "What is an NOC?",
      answer: "NOC means 'No Objection Certificate'. It confirms that a concerned authority (like Fire Services or MIDC) has no objection to your proposed business activity."
    },
    {
      title: "What is Consent to Establish (CTE)?",
      answer: "Also known as Pollution Permission. It is mandatory from MPCB before starting any construction or site activity for your factory."
    },
    {
      title: "What is Business Passport?",
      answer: "Business Passport stores your company details once so you don't have to re-enter your GST, PAN, or land details for every single government application."
    },
    {
      title: "What is Parallel Approval Optimization?",
      answer: "Instead of waiting for one permission to finish before starting another, UdyogSetu shows which approvals can be applied for at the same time to save months."
    }
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(4px)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: 'white', width: '100%', maxWidth: '840px', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Modal Header */}
        <div style={{ background: '#0e2439', color: 'white', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>What would you like to do?</h2>
            <p style={{ color: '#93c5fd', fontSize: '0.88rem', margin: '4px 0 0' }}>Select your primary goal to jump directly into your workflow</p>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {actions.map(act => (
              <div 
                key={act.id} 
                onClick={() => { onNavigate(act.targetTab); onClose(); }}
                style={{ 
                  border: '1.5px solid #e2e8f0', 
                  borderRadius: '12px', 
                  padding: '16px 20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: '#ffffff'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = act.color;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>{act.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0' }}>{act.desc}</p>
                </div>
                <div style={{ background: '#f1f5f9', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a' }}>
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Help Me Understand Section */}
          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <HelpCircle color="#d97706" size={20} />
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>Help Me Understand (Simple Terminology)</h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '10px' }}>
              {helpTopics.map((topic, idx) => (
                <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 14px' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#1e3a8a', marginBottom: '4px' }}>
                    ❓ {topic.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.4' }}>
                    {topic.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{ background: '#f8fafc', padding: '14px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>💡 Pro tip: Turn on <strong>Simple Language Mode</strong> from the top bar for simplified terms.</span>
          <button onClick={onClose} className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>Close Window</button>
        </div>
      </div>
    </div>
  );
}
