import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Clock, AlertTriangle, CheckCircle2, Search, ArrowRight, 
  HelpCircle, MessageSquare, History, ShieldAlert, Cpu
} from 'lucide-react';

export default function ApplicationTrackerPage() {
  const { applications, resolveApplicationQuery, simpleMode } = useApp();
  const [selectedAppId, setSelectedAppId] = useState(applications[0].appId);

  const selectedApp = applications.find(a => a.appId === selectedAppId) || applications[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div className="card" style={{ background: 'var(--primary-gradient)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ background: '#d97706', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              Live Application Tracker & Delay Intelligence
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
              Application #{selectedApp.appId}
            </h1>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
              {selectedApp.approvalName} • {selectedApp.department}
            </p>
          </div>

          {/* Select Application switcher */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {applications.map(app => (
              <button 
                key={app.appId}
                className={`btn ${selectedAppId === app.appId ? 'btn-saffron' : 'btn-outline'}`}
                style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                onClick={() => setSelectedAppId(app.appId)}
              >
                {app.approvalName.split(' ')[0]} ({app.status === 'completed' ? '✓' : app.delayRisk})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main SLA & Stage Status Cards */}
      <div className="grid-3">
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Statutory SLA Days</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0e2439' }}>{selectedApp.slaDaysTotal} Days</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Official Department Limit</div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Elapsed Days</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e40af' }}>{selectedApp.daysElapsed} Days</div>
          <div style={{ fontSize: '0.75rem', color: '#1e40af' }}>{selectedApp.daysRemaining} Days Remaining</div>
        </div>

        <div className="card" style={{ textAlign: 'center', border: selectedApp.delayRisk === 'HIGH' ? '2px solid #ef4444' : '1px solid #10b981', background: selectedApp.delayRisk === 'HIGH' ? '#fef2f2' : '#f0fdf4' }}>
          <div style={{ fontSize: '0.8rem', color: selectedApp.delayRisk === 'HIGH' ? '#991b1b' : '#065f46' }}>AI SLA Risk Prediction</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: selectedApp.delayRisk === 'HIGH' ? '#ef4444' : '#10b981' }}>{selectedApp.delayRisk} RISK</div>
          <div style={{ fontSize: '0.75rem', color: selectedApp.delayRisk === 'HIGH' ? '#991b1b' : '#047857' }}>
            {selectedApp.delayRisk === 'HIGH' ? 'Bottleneck Detected' : 'Processing on Track'}
          </div>
        </div>
      </div>

      {/* 🚨 "WHY IS MY APPLICATION DELAYED?" Bottleneck Diagnosis */}
      {selectedApp.delayDiagnosis && (
        <div className="card" style={{ borderLeft: '6px solid #d97706', background: '#fffbeb', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase' }}>
            <Cpu size={18} />
            <span>AI Bottleneck Diagnosis • "Why is my application delayed?"</span>
          </div>

          <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#78350f' }}>Current Bottleneck</div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#92400e' }}>{selectedApp.delayDiagnosis.bottleneck}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#78350f' }}>Days Waiting at Current Stage</div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#92400e' }}>{selectedApp.delayDiagnosis.waitingDays} Days</div>
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#78350f' }}>Recommended Action</div>
              <div style={{ fontWeight: '600', fontSize: '0.88rem', color: '#78350f' }}>{selectedApp.delayDiagnosis.recommendedAction}</div>
            </div>
          </div>
        </div>
      )}

      {/* Query Resolver Widget if active query */}
      {selectedApp.query && (
        <div className="card" style={{ border: '2px solid #ef4444', background: '#ffffff', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontWeight: '800', fontSize: '1.1rem' }}>
            <MessageSquare size={22} /> Department Query Raised by MPCB Officer
          </div>

          <div style={{ background: '#fef2f2', padding: '14px', borderRadius: '8px', margin: '14px 0', fontSize: '0.9rem', color: '#991b1b' }}>
            <strong>Official Officer Query:</strong> "{selectedApp.query.text}"
          </div>

          <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ color: '#1e3a8a', fontWeight: '700' }}>💡 What does this mean? (Simple Explanation)</div>
            <div style={{ color: '#475569' }}>{selectedApp.query.simpleExplanation}</div>
            <div style={{ color: '#059669', fontWeight: '700', marginTop: '6px' }}>✅ Recommended Next Step:</div>
            <div style={{ color: '#334155' }}>{selectedApp.query.requiredAction}</div>
          </div>

          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <button 
              className="btn btn-saffron"
              onClick={() => resolveApplicationQuery(selectedApp.appId)}
            >
              Respond to Query & Re-Submit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Timeline Stages & Audit Log */}
      <div className="grid-2">
        {/* Timeline */}
        <div className="card">
          <h3 className="card-title">
            <Clock size={20} color="#1e40af" /> Stage-by-Stage Scrutiny Tracker
          </h3>

          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {selectedApp.stages.map((st, idx) => (
              <div key={idx} className="timeline-item">
                <div className={`timeline-dot ${st.completed ? 'completed' : st.current ? (st.warning ? 'warning' : 'current') : ''}`} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: st.current ? '700' : '500', color: st.current ? '#0f172a' : '#64748b', fontSize: '0.9rem' }}>
                    {st.name} {st.current && <span style={{ fontSize: '0.75rem', background: st.warning ? '#ef4444' : '#d97706', color: 'white', padding: '2px 6px', borderRadius: '10px', marginLeft: '6px' }}>Current Stage</span>}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{st.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Trail */}
        <div className="card">
          <h3 className="card-title">
            <History size={20} color="#64748b" /> Immutable Activity Audit Log
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
              <span style={{ fontWeight: '700', color: '#0f172a' }}>09:32 AM</span> — Application Created in UdyogSetu System
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
              <span style={{ fontWeight: '700', color: '#0f172a' }}>09:41 AM</span> — MIDC Lease & ETP Documents Attached
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
              <span style={{ fontWeight: '700', color: '#0f172a' }}>10:03 AM</span> — AI Pre-Validation Checks Passed with 85% Score
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
              <span style={{ fontWeight: '700', color: '#0f172a' }}>10:15 AM</span> — Submitted to MPCB Pune Zone Portal
            </div>
            <div>
              <span style={{ fontWeight: '700', color: '#d97706' }}>12:10 PM</span> — Scrutiny Query Raised by Department Officer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
