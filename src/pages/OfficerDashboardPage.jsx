import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_BOTTLENECK_DATA, DEMO_WORKLOAD_DATA } from '../data/mockData';
import { 
  ShieldCheck, AlertTriangle, Clock, CheckCircle2, Search, 
  BarChart2, Filter, Cpu, ArrowRight, UserCheck, AlertCircle
} from 'lucide-react';

export default function OfficerDashboardPage() {
  const { officerQueue, resolveApplicationQuery } = useApp();
  const [activeTab, setActiveTab] = useState('queue'); // 'queue' | 'bottlenecks' | 'workload'
  const [filterRisk, setFilterRisk] = useState('All');

  const filteredQueue = officerQueue.filter(item => {
    if (filterRisk === 'All') return true;
    return item.risk.toLowerCase() === filterRisk.toLowerCase();
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Officer Header */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #091724, #163654)', color: 'white', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ background: '#1e40af', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              OFFICER PORTAL • MPCB PUNE ZONE
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
              Department Operations & SLA Governance
            </h1>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
              Priya Deshmukh (Senior Scrutiny Officer) • Officer ID: #MPCB-PN-8812
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '4px', borderRadius: '8px' }}>
            <button 
              className={`btn ${activeTab === 'queue' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem', color: 'white' }}
              onClick={() => setActiveTab('queue')}
            >
              Application Queue ({officerQueue.length})
            </button>
            <button 
              className={`btn ${activeTab === 'bottlenecks' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem', color: 'white' }}
              onClick={() => setActiveTab('bottlenecks')}
            >
              <BarChart2 size={14} /> Bottleneck Analytics
            </button>
            <button 
              className={`btn ${activeTab === 'workload' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem', color: 'white' }}
              onClick={() => setActiveTab('workload')}
            >
              <UserCheck size={14} /> Workload Balancing
            </button>
          </div>
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid-4">
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Pending Applications</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0e2439' }}>128</div>
          <div style={{ fontSize: '0.75rem', color: '#3b82f6' }}>Pune Zone MPCB</div>
        </div>

        <div className="card" style={{ textAlign: 'center', border: '2px solid #f59e0b', background: '#fffbeb' }}>
          <div style={{ fontSize: '0.8rem', color: '#92400e' }}>SLA At Risk</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#d97706' }}>17</div>
          <div style={{ fontSize: '0.75rem', color: '#b45309', fontWeight: '700' }}>Approaching 45-day deadline</div>
        </div>

        <div className="card" style={{ textAlign: 'center', border: '2px solid #ef4444', background: '#fef2f2' }}>
          <div style={{ fontSize: '0.8rem', color: '#991b1b' }}>SLA Overdue</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ef4444' }}>8</div>
          <div style={{ fontSize: '0.75rem', color: '#991b1b', fontWeight: '700' }}>High Priority Escalation</div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Queries Awaiting Response</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e40af' }}>14</div>
          <div style={{ fontSize: '0.75rem', color: '#1e40af' }}>Applicant Clarification</div>
        </div>
      </div>

      {/* View 1: Application Queue & Risk Scrutiny */}
      {activeTab === 'queue' && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <h3 className="card-title" style={{ margin: 0 }}>
              <ShieldCheck size={20} color="#1e40af" /> Officer Work Queue & Risk-Based Scrutiny
            </h3>

            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Filter by AI Risk:</span>
              {['All', 'High', 'Medium', 'Low'].map(rk => (
                <button 
                  key={rk}
                  onClick={() => setFilterRisk(rk)}
                  style={{ 
                    background: filterRisk === rk ? '#0e2439' : '#f1f5f9', 
                    color: filterRisk === rk ? 'white' : '#475569',
                    border: 'none', 
                    padding: '4px 10px', 
                    borderRadius: '14px', 
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                >
                  {rk}
                </button>
              ))}
            </div>
          </div>

          {/* AI Notice */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px 14px', borderRadius: '8px', fontSize: '0.78rem', color: '#475569', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="#d97706" />
            <span><strong>AI Decision-Support Notice:</strong> Risk scores provide scrutiny recommendations only. Statutory approval or rejection decisions rest exclusively with competent government officers.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredQueue.map(item => (
              <div key={item.appId} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderLeft: `5px solid ${item.risk === 'High' ? '#ef4444' : item.risk === 'Medium' ? '#f59e0b' : '#10b981'}` }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0e2439' }}>{item.appId}</span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>• {item.applicant}</span>
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1e40af', marginTop: '2px' }}>{item.approvalName}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                    Days Pending: <strong>{item.daysPending} / {item.slaDays} SLA Days</strong> • Status: {item.status}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#78350f', background: '#fef3c7', padding: '2px 8px', borderRadius: '4px', marginTop: '6px', width: 'fit-content' }}>
                    AI Risk Trigger: {item.riskReason}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => alert(`Reviewing scrutiny dossier for ${item.appId}`)}>
                    Review Dossier
                  </button>
                  <button className="btn btn-saffron" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => alert(`Approved ${item.appId} on behalf of officer.`)}>
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 2: Government Bottleneck Analytics */}
      {activeTab === 'bottlenecks' && (
        <div className="card">
          <h3 className="card-title">
            <BarChart2 size={20} color="#d97706" /> Where are applications getting delayed? (State Bottleneck Breakdown)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
            {DEMO_BOTTLENECK_DATA.map((b, idx) => (
              <div key={idx} style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                  <span>{b.name} ({b.count} Applications)</span>
                  <span>{b.percentage}% of total delays • Avg {b.avgDays} Days Wait</span>
                </div>
                <div style={{ width: '100%', height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{ width: `${b.percentage}%`, height: '100%', background: idx === 0 ? '#ef4444' : idx === 1 ? '#f59e0b' : '#3b82f6' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', background: '#f0fdf4', border: '1px solid #10b981', padding: '14px', borderRadius: '8px', color: '#065f46', fontSize: '0.88rem' }}>
            💡 <strong>AI Strategic Insight:</strong> Field Inspection scheduling is currently the largest bottleneck in Pune Zone (38%). Implementing digital photo-verification for low-risk green category units can reduce wait times by 11 days.
          </div>
        </div>
      )}

      {/* View 3: Workload Balancing */}
      {activeTab === 'workload' && (
        <div className="card">
          <h3 className="card-title">
            <UserCheck size={20} color="#1e40af" /> Department Officer Workload Analytics
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
            {DEMO_WORKLOAD_DATA.map((w, idx) => (
              <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0f172a' }}>{w.officer}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Assigned Applications: {w.assigned} / {w.capacity}</div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem', color: w.percentage > 90 ? '#ef4444' : '#10b981' }}>{w.percentage}% Capacity</div>
                  <div className={`badge ${w.percentage > 90 ? 'badge-danger' : 'badge-success'}`}>{w.status}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', background: '#fffbeb', border: '1px solid #f59e0b', padding: '14px', borderRadius: '8px', color: '#92400e', fontSize: '0.88rem' }}>
            🤖 <strong>AI Workload Balancing Recommendation:</strong> 7 low-risk applications assigned to Priya Deshmukh could potentially be redistributed to Chhatrapati Sambhajinagar officers according to authorized departmental rules.
          </div>
        </div>
      )}
    </div>
  );
}
