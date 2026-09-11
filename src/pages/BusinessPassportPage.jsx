import { useApp } from '../context/AppContext';
import { 
  Building, CreditCard, MapPin, Award, CheckCircle, RefreshCw, FileText, Share2 
} from 'lucide-react';

export default function BusinessPassportPage() {
  const { business } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'var(--primary-gradient)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#d97706', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              <Award size={14} /> MAHARASHTRA DIGITAL PUBLIC INFRASTRUCTURE PASSPORT
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '8px', color: 'white' }}>
              My Business Passport
            </h1>
            <p style={{ color: '#93c5fd', fontSize: '0.92rem' }}>
              Main message: <strong>Enter once. Reuse everywhere.</strong> Auto-prefills all department approval applications.
            </p>
          </div>

          <button className="btn btn-saffron" onClick={() => alert('Business Passport exported as signed JSON/PDF token for verification.')}>
            <Share2 size={16} /> Export Verified Passport Token
          </button>
        </div>
      </div>

      {/* Grid: Business Identity & Details */}
      <div className="grid-2">
        
        {/* Company Identity */}
        <div className="card">
          <h3 className="card-title">
            <Building size={20} color="#d97706" /> Business Identity & Registration
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Legal Business Name</div>
              <div style={{ fontWeight: '700', color: '#0f172a' }}>{business.name}</div>
            </div>

            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Category & Sub-Industry</div>
              <div style={{ fontWeight: '600' }}>{business.category} ({business.subCategory})</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>PAN Number</div>
                <div style={{ fontWeight: '700', fontFamily: 'monospace' }}>{business.pan}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>GSTIN Number</div>
                <div style={{ fontWeight: '700', fontFamily: 'monospace' }}>{business.gstin}</div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Corporate Identification Number (CIN)</div>
              <div style={{ fontWeight: '700', fontFamily: 'monospace' }}>{business.cin}</div>
            </div>
          </div>
        </div>

        {/* Land & Infrastructure Specs */}
        <div className="card">
          <h3 className="card-title">
            <MapPin size={20} color="#10b981" /> Location & Utility Specifications
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Registered Address</div>
              <div style={{ fontWeight: '600', color: '#0f172a' }}>{business.address}</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Land Area</div>
                <div style={{ fontWeight: '700' }}>{business.landAreaSqFt.toLocaleString()} sq. ft.</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Built-Up Area</div>
                <div style={{ fontWeight: '700' }}>{business.builtUpAreaSqFt.toLocaleString()} sq. ft.</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Power Connected Load</div>
                <div style={{ fontWeight: '700' }}>{business.powerReqKW} KW (High Tension)</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Daily Water Demand</div>
                <div style={{ fontWeight: '700' }}>{business.waterReqKLPD} KLPD</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
