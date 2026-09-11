import { useApp } from '../context/AppContext';
import { Calendar, CheckCircle2, Clock, MapPin, User, FileText, AlertTriangle } from 'lucide-react';

export default function InspectionsPage() {
  const { inspections } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0e2439, #163654)', color: 'white', padding: '24px' }}>
        <div>
          <span style={{ background: '#d97706', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
            Site Verification & Department Visits
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
            My Field Inspections
          </h1>
          <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
            Track scheduled department inspection visits, preparation checklists, and inspector contacts.
          </p>
        </div>
      </div>

      {/* Inspections List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {inspections.map(insp => (
          <div key={insp.id} className="card" style={{ borderLeft: `6px solid ${insp.status === 'Upcoming' ? '#3b82f6' : '#10b981'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className={`badge ${insp.status === 'Upcoming' ? 'badge-info' : 'badge-success'}`} style={{ marginBottom: '6px' }}>
                  {insp.status}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>{insp.type}</h3>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                  Department: <strong>{insp.department}</strong>
                </div>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px 16px', borderRadius: '10px', textAlign: 'right' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0e2439', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} color="#d97706" /> {insp.date} {insp.time && `at ${insp.time}`}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                  <MapPin size={14} /> {insp.location}
                </div>
              </div>
            </div>

            {/* Preparation Checklist if available */}
            {insp.checklist && (
              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                  📋 Pre-Inspection Preparation Checklist
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {insp.checklist.map((item, idx) => (
                    <div key={idx} style={{ background: item.status === 'ready' ? '#f0fdf4' : '#fffbeb', border: `1px solid ${item.status === 'ready' ? '#10b981' : '#f59e0b'}`, padding: '8px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: item.status === 'ready' ? '#065f46' : '#92400e', fontWeight: '600' }}>
                        {item.status === 'ready' ? '✓' : '⚠'} {item.item}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {item.note || (item.status === 'ready' ? 'Document Ready' : 'Action Pending')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Result if completed */}
            {insp.result && (
              <div style={{ marginTop: '14px', background: '#d1fae5', padding: '10px 14px', borderRadius: '8px', color: '#065f46', fontSize: '0.85rem', fontWeight: '600' }}>
                {insp.result}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
