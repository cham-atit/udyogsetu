import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  RefreshCw, Calendar, Award, CheckCircle2, AlertTriangle, 
  Clock, ShieldCheck, ArrowRight
} from 'lucide-react';

export default function ComplianceCenterPage() {
  const { complianceTasks, renewals } = useApp();
  const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' | 'renewals'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'var(--primary-gradient)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ background: '#8b5cf6', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              Lifetime Business Support
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
              Continuous Compliance & Renewal Center
            </h1>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
              Track active licenses, statutory filings, and upcoming renewal deadlines automatically.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '4px', borderRadius: '8px' }}>
            <button 
              className={`btn ${activeTab === 'calendar' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={14} /> Statutory Calendar
            </button>
            <button 
              className={`btn ${activeTab === 'renewals' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              onClick={() => setActiveTab('renewals')}
            >
              <RefreshCw size={14} /> Renewal Manager
            </button>
          </div>
        </div>
      </div>

      {/* Compliance Health Score Widget */}
      <div className="card" style={{ background: '#f8fafc', borderLeft: '6px solid #10b981', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: 84, height: 84, borderRadius: '50%', background: '#0e2439', color: '#10b981', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
              <span style={{ fontSize: '1.7rem', fontWeight: '800', lineHeight: 1 }}>91</span>
              <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>/ 100</span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>Compliance Health Score: EXCELLENT</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                All mandatory filings up to date. Fire safety equipment log renewal due in 17 days.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', fontSize: '0.82rem' }}>
            <div>
              <div style={{ color: '#64748b' }}>Active Licenses</div>
              <strong style={{ color: '#10b981', fontSize: '1.1rem' }}>7 Active</strong>
            </div>
            <div>
              <div style={{ color: '#64748b' }}>Pending Filings</div>
              <strong style={{ color: '#d97706', fontSize: '1.1rem' }}>4 Due</strong>
            </div>
          </div>
        </div>
      </div>

      {/* View 1: Compliance Calendar */}
      {activeTab === 'calendar' && (
        <div className="card">
          <h3 className="card-title">
            <Calendar size={20} color="#8b5cf6" /> September 2026 Statutory Compliance Calendar
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            {complianceTasks.map(task => (
              <div key={task.id} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span className="badge badge-info" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>{task.category}</span>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>{task.title}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Department: {task.department} • Frequency: {task.frequency}</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#b45309' }}>Due: {task.dueDate}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{task.daysRemaining} Days Remaining</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 2: Renewal Manager */}
      {activeTab === 'renewals' && (
        <div className="card">
          <h3 className="card-title">
            <RefreshCw size={20} color="#d97706" /> Upcoming License Renewals
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            {renewals.map(ren => (
              <div key={ren.id} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderLeft: `5px solid ${ren.status === 'critical' ? '#ef4444' : '#f59e0b'}` }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>{ren.approvalName}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Department: {ren.department}</div>
                  <div style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: '600', marginTop: '4px' }}>Action Needed: {ren.actionRequired}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>Expires: {ren.expiryDate}</div>
                    <div style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: '700' }}>{ren.daysLeft} Days Left</div>
                  </div>

                  <button className="btn btn-saffron" style={{ padding: '8px 14px', fontSize: '0.82rem' }} onClick={() => alert(`Pre-filled renewal application generated using Business Passport data for ${ren.approvalName}.`)}>
                    Start Renewal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
