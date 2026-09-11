import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Layers, CheckCircle, Clock, AlertTriangle, Lock, HelpCircle, 
  Zap, ArrowRight, ArrowDown, FileText
} from 'lucide-react';

export default function ApprovalFinderPage({ onNavigate }) {
  const { approvals, simpleMode } = useApp();
  const [activeTab, setActiveTab] = useState('graph'); // 'graph' | 'list' | 'parallel'
  const [selectedApproval, setSelectedApproval] = useState(null);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return <span className="badge badge-success">✓ Completed</span>;
      case 'in-progress': return <span className="badge badge-info">● In Progress</span>;
      case 'action-required': return <span className="badge badge-danger">⚠ Action Required</span>;
      case 'waiting-dependency': return <span className="badge badge-neutral">🔒 Waiting for Dependency</span>;
      default: return <span className="badge badge-neutral">○ Not Started</span>;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div className="card" style={{ background: 'var(--primary-gradient)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ background: '#d97706', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              AI Smart Approval Finder
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
              Personalized Approval Journey
            </h1>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
              12 approvals identified for <strong>Food Processing Unit (Pune, ₹5 Cr Investment)</strong>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '4px', borderRadius: '8px' }}>
            <button 
              className={`btn ${activeTab === 'graph' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              onClick={() => setActiveTab('graph')}
            >
              <Layers size={14} /> Interactive Graph
            </button>
            <button 
              className={`btn ${activeTab === 'parallel' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              onClick={() => setActiveTab('parallel')}
            >
              <Zap size={14} /> Parallel Optimizer
            </button>
            <button 
              className={`btn ${activeTab === 'list' ? 'btn-saffron' : 'btn-outline'}`}
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              onClick={() => setActiveTab('list')}
            >
              List View ({approvals.length})
            </button>
          </div>
        </div>
      </div>

      {/* View 1: Interactive Approval Dependency Graph */}
      {activeTab === 'graph' && (
        <div className="card" style={{ padding: '28px' }}>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 className="card-title" style={{ margin: 0 }}>Interactive Dependency Graph</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Click any approval node to view mandatory documents & prerequisites</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.78rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} /> Completed</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} /> Action Needed</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6' }} /> In Progress</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#94a3b8' }} /> Waiting Dependency</span>
            </div>
          </div>

          {/* Visual Graph Nodes Flow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
            
            {/* Tier 1: Foundation */}
            <div style={{ width: '100%', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '800', color: '#64748b', textAlign: 'center' }}>
              STAGE 1 — LAND & FOUNDATION CLEARANCE
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div 
                onClick={() => setSelectedApproval(approvals[0])}
                style={{ 
                  background: '#ffffff', 
                  border: '2px solid #10b981', 
                  borderRadius: '10px', 
                  padding: '12px 18px', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  minWidth: '260px'
                }}
              >
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>{simpleMode ? approvals[0].simpleName : approvals[0].name}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{approvals[0].department}</div>
                <div style={{ marginTop: '6px' }}>{getStatusBadge(approvals[0].status)}</div>
              </div>
            </div>

            <ArrowDown size={24} color="#94a3b8" />

            {/* Tier 2: Parallel Clearances */}
            <div style={{ width: '100%', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '800', color: '#64748b', textAlign: 'center' }}>
              STAGE 2 — PARALLEL CLEARANCES (BUILDING, FIRE & POLLUTION)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', width: '100%' }}>
              {approvals.slice(1, 4).map(ap => (
                <div 
                  key={ap.id}
                  onClick={() => setSelectedApproval(ap)}
                  style={{ 
                    background: '#ffffff', 
                    border: `2px solid ${ap.status === 'action-required' ? '#ef4444' : ap.status === 'completed' ? '#10b981' : '#3b82f6'}`, 
                    borderRadius: '10px', 
                    padding: '12px', 
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>{simpleMode ? ap.simpleName : ap.name}</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', margin: '2px 0 6px' }}>{ap.department}</div>
                  <div>{getStatusBadge(ap.status)}</div>
                </div>
              ))}
            </div>

            <ArrowDown size={24} color="#94a3b8" />

            {/* Tier 3: Operational Licenses */}
            <div style={{ width: '100%', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '800', color: '#64748b', textAlign: 'center' }}>
              STAGE 3 — OPERATIONAL PERMITS & SECTOR LICENSES
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', width: '100%' }}>
              {approvals.slice(4, 8).map(ap => (
                <div 
                  key={ap.id}
                  onClick={() => setSelectedApproval(ap)}
                  style={{ 
                    background: '#ffffff', 
                    border: '2px solid #cbd5e1', 
                    borderRadius: '10px', 
                    padding: '12px', 
                    cursor: 'pointer',
                    textAlign: 'center',
                    opacity: ap.status === 'waiting-dependency' ? 0.75 : 1
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>{simpleMode ? ap.simpleName : ap.name}</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', margin: '2px 0 6px' }}>{ap.department}</div>
                  <div>{getStatusBadge(ap.status)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* View 2: Parallel Approval Optimizer */}
      {activeTab === 'parallel' && (
        <div className="card" style={{ padding: '28px' }}>
          <div style={{ background: '#f0fdf4', border: '1px solid #10b981', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#047857', fontWeight: '800', fontSize: '1.1rem' }}>
              <Zap size={22} /> UdyogSetu Parallel Journey Optimization Result
            </div>
            <p style={{ color: '#065f46', fontSize: '0.9rem', marginTop: '6px' }}>
              Traditional sequential workflow requires <strong>135 statutory days</strong>. By executing Building Plan, Fire NOC, and MPCB Consent concurrently after Land Allotment, UdyogSetu reduces estimated timeline to <strong>65 statutory days (51% time saving)</strong>.
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.75rem', color: '#047857', fontStyle: 'italic' }}>
              Illustrative optimization for demonstration. Actual statutory dependencies and timelines are determined by competent authorities.
            </div>
          </div>

          <div className="grid-2">
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              <h4 style={{ color: '#ef4444', fontWeight: '700', marginBottom: '12px' }}>❌ Traditional Sequential Journey (135 Days)</h4>
              <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>1. Land Approval (30 Days)</div>
                <div>↓ 2. Building Plan Sanction (30 Days)</div>
                <div>↓ 3. Provisional Fire NOC (30 Days)</div>
                <div>↓ 4. MPCB Pollution Consent (45 Days)</div>
              </div>
            </div>

            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '10px', border: '1px solid #10b981' }}>
              <h4 style={{ color: '#047857', fontWeight: '700', marginBottom: '12px' }}>⚡ UdyogSetu Parallel Journey (65 Days)</h4>
              <div style={{ fontSize: '0.82rem', color: '#065f46', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>1. Land Approval (30 Days)</div>
                <div>↓ [Building Plan] + [Fire NOC] + [MPCB Consent] concurrently!</div>
                <div>↓ 3. Final Operational License (20 Days)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 3: List View */}
      {activeTab === 'list' && (
        <div className="card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {approvals.map(ap => (
              <div key={ap.id} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1rem', color: '#0f172a' }}>
                    {simpleMode ? ap.simpleName : ap.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{ap.department} • Statutory Timeline: {ap.statutoryDays} Days</div>
                  <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>{ap.whyApplies}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {getStatusBadge(ap.status)}
                  <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={() => setSelectedApproval(ap)}>
                    Explain This
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explain Approval Modal */}
      {selectedApproval && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="card" style={{ maxWidth: '540px', width: '100%', padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0e2439' }}>
              {selectedApproval.name}
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', margin: '4px 0 16px' }}>
              {selectedApproval.simpleDescription}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <div><strong>Issuing Department:</strong> {selectedApproval.department}</div>
              <div><strong>Why do I need it?</strong> {selectedApproval.whyApplies}</div>
              <div><strong>Indicative Fee:</strong> {selectedApproval.fee}</div>
              <div><strong>Statutory Timeline:</strong> {selectedApproval.statutoryDays} Working Days</div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button className="btn btn-primary" onClick={() => setSelectedApproval(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
