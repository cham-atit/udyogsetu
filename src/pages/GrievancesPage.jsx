import { useState } from 'react';
import { HelpCircle, Send, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function GrievancesPage() {
  const [grievances, setGrievances] = useState([
    {
      id: "GRV-8821",
      category: "Application delayed",
      subject: "Pollution Consent delayed beyond 25 days in Scrutiny",
      date: "2024-04-20",
      status: "Under Review",
      stageIndex: 2, // 0: Submitted, 1: Received, 2: Under Review, 3: Resolved
      response: "Assigned to Zonal Supervisory Officer for expedited clearance."
    }
  ]);

  const [issueType, setIssueType] = useState('Application delayed');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim()) return;

    const newGrv = {
      id: `GRV-${Math.floor(1000 + Math.random() * 9000)}`,
      category: issueType,
      subject: subject,
      date: new Date().toISOString().split('T')[0],
      status: "Submitted",
      stageIndex: 0,
      response: "Grievance registered. Department coordinator will inspect within 24 hours."
    };

    setGrievances([newGrv, ...grievances]);
    setSubject('');
    setDetails('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0e2439, #163654)', color: 'white', padding: '24px' }}>
        <div>
          <span style={{ background: '#f59e0b', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
            Citizen Support & Dispute Resolution
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
            Help & Grievance Redressal Center
          </h1>
          <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
            Report application delays, technical issues, or department query escalations directly to senior government supervisors.
          </p>
        </div>
      </div>

      <div className="grid-2">
        
        {/* Left: Raise Grievance Form */}
        <div className="card">
          <h3 className="card-title">
            <HelpCircle size={20} color="#d97706" /> Register New Ticket / Escalation
          </h3>

          {submittedSuccess && (
            <div style={{ background: '#d1fae5', color: '#065f46', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '16px' }}>
              ✓ Ticket registered successfully! Track resolution progress below.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Issue Category</label>
              <select 
                value={issueType} 
                onChange={e => setIssueType(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              >
                <option value="Application delayed">Application delayed</option>
                <option value="Technical problem">Technical problem</option>
                <option value="Department query">Department query clarification</option>
                <option value="Document issue">Document validation issue</option>
                <option value="Wrong information">Incorrect information listed</option>
                <option value="Other">Other assistance</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Subject / Brief Summary</label>
              <input 
                type="text" 
                placeholder="e.g. Scrutiny pending for 10 days at MPCB" 
                value={subject}
                onChange={e => setSubject(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Detailed Description</label>
              <textarea 
                rows="4" 
                placeholder="Provide application ID or details..."
                value={details}
                onChange={e => setDetails(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <button type="submit" className="btn btn-saffron" style={{ padding: '12px', fontSize: '0.95rem' }}>
              Submit Grievance Ticket <Send size={16} />
            </button>
          </form>
        </div>

        {/* Right: Ticket Tracking History */}
        <div className="card">
          <h3 className="card-title">
            <Clock size={20} color="#1e40af" /> My Ticket Resolution Pipeline
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
            {grievances.map(g => (
              <div key={g.id} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px', background: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0e2439' }}>{g.id}</span>
                  <span className="badge badge-warning">{g.status}</span>
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a', margin: '4px 0' }}>{g.subject}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Category: {g.category} • Date: {g.date}</div>

                {/* Progress Steps: Submitted -> Received -> Under Review -> Resolved */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #e2e8f0', fontSize: '0.72rem', color: '#475569' }}>
                  <span style={{ fontWeight: g.stageIndex >= 0 ? '700' : 'normal', color: g.stageIndex >= 0 ? '#10b981' : '#64748b' }}>✓ Submitted</span>
                  <span style={{ fontWeight: g.stageIndex >= 1 ? '700' : 'normal', color: g.stageIndex >= 1 ? '#10b981' : '#64748b' }}>✓ Received</span>
                  <span style={{ fontWeight: g.stageIndex >= 2 ? '700' : 'normal', color: g.stageIndex >= 2 ? '#d97706' : '#64748b' }}>● Under Review</span>
                  <span style={{ fontWeight: g.stageIndex >= 3 ? '700' : 'normal', color: g.stageIndex >= 3 ? '#10b981' : '#64748b' }}>○ Resolved</span>
                </div>

                <div style={{ marginTop: '10px', background: '#ffffff', padding: '8px 12px', borderRadius: '6px', fontSize: '0.8rem', color: '#334155', border: '1px solid #cbd5e1' }}>
                  <strong>Supervisor Note:</strong> {g.response}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
