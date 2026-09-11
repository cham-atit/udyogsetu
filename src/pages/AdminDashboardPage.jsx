import { useApp } from '../context/AppContext';
import { 
  Building2, Users, FileText, CheckCircle2, AlertTriangle, 
  BarChart2, ShieldCheck, Settings, Globe, Award
} from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Admin Header */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #091724, #163654)', color: 'white', padding: '24px' }}>
        <div>
          <span style={{ background: '#059669', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
            ADMINISTRATOR SYSTEM OVERVIEW
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
            Platform Overview & Digital Public Infrastructure Metrics
          </h1>
          <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
            Statewide industrial approval ecosystem analytics for Government of Maharashtra hackathon presentation.
          </p>
        </div>
      </div>

      {/* Main KPI Stats */}
      <div className="grid-4">
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Businesses Onboarded</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0e2439' }}>1,420</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981' }}>+18% this month</div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Total Applications Tracked</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e40af' }}>14,890</div>
          <div style={{ fontSize: '0.75rem', color: '#1e40af' }}>across 28 departments</div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Approvals Completed</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#10b981' }}>11,340</div>
          <div style={{ fontSize: '0.75rem', color: '#047857' }}>76.1% Success Rate</div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Average Journey Reduction</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#d97706' }}>51.4%</div>
          <div style={{ fontSize: '0.75rem', color: '#b45309' }}>from 135 to 65 days</div>
        </div>
      </div>

      {/* Analytics Breakdown */}
      <div className="grid-2">
        <div className="card">
          <h3 className="card-title">
            <AlertTriangle size={20} color="#f59e0b" /> Most Common Document Mismatches
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', marginTop: '12px' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>1. MIDC Plot Phase Address Variation</span>
              <strong>42% of queries</strong>
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>2. Missing Authorized Promoter Signature</span>
              <strong>28% of queries</strong>
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>3. Expired Fire Extinguisher Log</span>
              <strong>18% of queries</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>4. GST Name Abbreviation Mismatch</span>
              <strong>12% of queries</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">
            <Award size={20} color="#ec4899" /> Most Requested Government Schemes
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', marginTop: '12px' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>1. Package Scheme of Incentives (PSI 2019)</span>
              <strong>840 Applications</strong>
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>2. CM Agriculture & Food Processing Scheme</span>
              <strong>420 Applications</strong>
            </div>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>3. Green Manufacturing & ETP Subsidy</span>
              <strong>290 Applications</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
