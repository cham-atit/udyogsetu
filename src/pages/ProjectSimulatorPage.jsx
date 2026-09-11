import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Cpu, RefreshCw, ArrowRight, Zap, CheckCircle, ShieldAlert } from 'lucide-react';

export default function ProjectSimulatorPage({ onNavigate }) {
  const { simulatedInvestment, simulatedDistrict, updateSimulatedProject } = useApp();
  const [invAmount, setInvAmount] = useState(simulatedInvestment);
  const [district, setDistrict] = useState(simulatedDistrict);

  const handleSimulate = () => {
    updateSimulatedProject(invAmount, district);
  };

  const isExpanded = invAmount > 100000000; // > 10 Cr

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #0e2439, #163654)', color: 'white', padding: '24px' }}>
        <div>
          <span style={{ background: '#be185d', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
            Major Hackathon Innovation
          </span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
            Project Impact Simulator ("What If I Change My Project?")
          </h1>
          <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
            Test hypothetical scaling or relocation scenarios before making real-world investments.
          </p>
        </div>
      </div>

      {/* Simulator Inputs */}
      <div className="card" style={{ padding: '24px' }}>
        <h3 className="card-title">
          <Cpu size={20} color="#d97706" /> Adjust Project Parameters
        </h3>

        <div className="grid-2" style={{ marginTop: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
              Simulated Investment Amount (in Rupees)
            </label>
            <input 
              type="number" 
              value={invAmount}
              onChange={e => setInvAmount(Number(e.target.value))}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', fontWeight: '700' }}
            />
            <div style={{ fontSize: '0.8rem', color: '#d97706', marginTop: '4px' }}>
              Current: ₹{(invAmount / 10000000).toFixed(1)} Crore ({invAmount > 100000000 ? 'Large Scale Enterprise' : 'MSME Medium Enterprise'})
            </div>
            
            {/* Quick Presets */}
            <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
              <button className="btn btn-outline" style={{ padding: '2px 8px', fontSize: '0.75rem' }} onClick={() => setInvAmount(50000000)}>Preset ₹5 Cr</button>
              <button className="btn btn-outline" style={{ padding: '2px 8px', fontSize: '0.75rem' }} onClick={() => setInvAmount(150000000)}>Preset ₹15 Cr</button>
              <button className="btn btn-outline" style={{ padding: '2px 8px', fontSize: '0.75rem' }} onClick={() => setInvAmount(500000000)}>Preset ₹50 Cr</button>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>
              Target District / Zone
            </label>
            <select 
              value={district}
              onChange={e => setDistrict(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
            >
              <option value="Pune">Pune (Group D+ Zone)</option>
              <option value="Nashik">Nashik (Group C Zone)</option>
              <option value="Chhatrapati Sambhajinagar">Chhatrapati Sambhajinagar (Group D Zone)</option>
              <option value="Nagpur">Nagpur (Group D+ Zone)</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button className="btn btn-saffron" onClick={handleSimulate}>
            Run Impact Simulation 🚀
          </button>
        </div>
      </div>

      {/* Simulation Results */}
      <div className="card" style={{ background: '#f8fafc', border: '2px solid #3b82f6', padding: '24px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e3a8a', marginBottom: '16px' }}>
          📊 Simulation Output for {district} at ₹{(invAmount / 10000000).toFixed(1)} Crore
        </h3>

        <div className="grid-3">
          <div style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Impact on Approvals</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: isExpanded ? '#d97706' : '#10b981' }}>
              {isExpanded ? '+3 Additional Approvals' : 'No Additional Approvals'}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '6px' }}>
              {isExpanded ? 'Triggers High Voltage Substation NOC & Boiler Registration' : 'Standard 12 approval roadmap applies'}
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Incentive Match Upgrade</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ec4899' }}>
              {isExpanded ? 'Mega Project Subsidy (+100% SGST)' : 'Standard PSI 2019 Scheme (80% SGST)'}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '6px' }}>
              Capital subsidy cap increases up to ₹5.00 Crore.
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Statutory SLA Impact</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e40af' }}>
              {isExpanded ? '90 Working Days' : '65 Working Days (Optimized)'}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '6px' }}>
              Includes specialized High Tension MSEDCL grid inspection.
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic', background: '#e2e8f0', padding: '8px 12px', borderRadius: '6px' }}>
          AI-assisted indicative simulation. Verify requirements with the competent authority.
        </div>
      </div>
    </div>
  );
}
