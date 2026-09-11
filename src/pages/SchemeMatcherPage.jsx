import { useApp } from '../context/AppContext';
import { Landmark, Award, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function SchemeMatcherPage() {
  const { schemes, business } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'var(--primary-gradient)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '28px' }}>
        <div>
          <span style={{ background: '#ec4899', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
            AI Government Support Matcher
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
            Government Schemes & Subsidies You Qualify For
          </h1>
          <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
            Personalized incentive recommendations based on your ₹5 Cr investment in Pune D+ Zone.
          </p>
        </div>
      </div>

      {/* Scheme Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {schemes.map(scheme => (
          <div key={scheme.id} className="card" style={{ borderLeft: '6px solid #ec4899' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="badge badge-info" style={{ marginBottom: '6px' }}>{scheme.category}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a' }}>{scheme.name}</h3>
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Offered by: {scheme.offeredBy}</div>
              </div>

              <div style={{ background: '#fce7f3', border: '1px solid #f472b6', padding: '8px 16px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', color: '#be185d', fontWeight: '700' }}>MATCH SCORE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#be185d' }}>{scheme.matchPercentage}%</div>
              </div>
            </div>

            {/* Financial Benefit */}
            <div style={{ background: '#fdf2f8', border: '1px solid #fbcfe8', padding: '12px 16px', borderRadius: '8px', margin: '14px 0', color: '#831843' }}>
              <strong>💰 Financial Incentive:</strong> {scheme.benefits}
            </div>

            {/* Why it matches */}
            <div style={{ fontSize: '0.85rem' }}>
              <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>Why your project matches:</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: 0 }}>
                {scheme.whyMatches.map((reason, idx) => (
                  <li key={idx} style={{ color: '#047857', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
                    <CheckCircle2 size={14} color="#10b981" /> {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Application Deadline: <strong>{scheme.deadline}</strong></div>
              <button className="btn btn-saffron" onClick={() => alert(`Initiated application for ${scheme.name} pre-filled with Business Passport data.`)}>
                Apply for Subsidy <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
