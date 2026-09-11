import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, User, ShieldCheck, KeyRound, Info } from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const { login, demoLogin } = useAuth();
  const [email, setEmail] = useState('entrepreneur@udyogsetu.demo');
  const [password, setPassword] = useState('Demo@123');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      if (email.includes('officer')) onNavigate('officer-dashboard');
      else if (email.includes('admin')) onNavigate('admin-dashboard');
      else onNavigate('dashboard');
    } else {
      setError('Invalid demo credentials. Use Demo@123 or click one of the Try Demo buttons below.');
    }
  };

  const handleDemoClick = (role) => {
    demoLogin(role);
    if (role === 'officer') onNavigate('officer-dashboard');
    else if (role === 'admin') onNavigate('admin-dashboard');
    else onNavigate('dashboard');
  };

  return (
    <div style={{ maxWidth: '440px', margin: '40px auto', width: '100%' }}>
      <div className="card" style={{ padding: '32px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ background: '#0e2439', color: 'white', width: 48, height: 48, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '1.4rem', fontWeight: '800' }}>
            U
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0e2439' }}>Sign in to UdyogSetu</h2>
          <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Access your business portal or officer dashboard</p>
        </div>

        {error && (
          <div style={{ background: '#fee2e2', color: '#991b1b', padding: '10px 14px', borderRadius: '8px', fontSize: '0.82rem', marginBottom: '16px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Email / Mobile</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
              <input 
                type="text" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', padding: '10px 12px 10px 38px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem' }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', padding: '10px 12px 10px 38px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem' }}
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#64748b' }}>
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <span style={{ color: '#1e40af', cursor: 'pointer', fontWeight: '600' }}>Forgot password?</span>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '12px', fontSize: '1rem', width: '100%', borderRadius: '8px', marginTop: '6px' }}>
            Sign In
          </button>
        </form>

        {/* Try Demo Buttons */}
        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', marginBottom: '12px' }}>
            ⚡ 1-Click Demo Login Roles
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              type="button" 
              onClick={() => handleDemoClick('entrepreneur')}
              className="btn btn-outline" 
              style={{ width: '100%', justifyContent: 'flex-start', background: '#f8fafc', padding: '10px 14px' }}
            >
              <User size={16} color="#d97706" /> 
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>Entrepreneur Account</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>entrepreneur@udyogsetu.demo</div>
              </div>
            </button>

            <button 
              type="button" 
              onClick={() => handleDemoClick('officer')}
              className="btn btn-outline" 
              style={{ width: '100%', justifyContent: 'flex-start', background: '#f8fafc', padding: '10px 14px' }}
            >
              <ShieldCheck size={16} color="#1e40af" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>Government Officer Account</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>officer@udyogsetu.demo</div>
              </div>
            </button>

            <button 
              type="button" 
              onClick={() => handleDemoClick('admin')}
              className="btn btn-outline" 
              style={{ width: '100%', justifyContent: 'flex-start', background: '#f8fafc', padding: '10px 14px' }}
            >
              <KeyRound size={16} color="#059669" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>Administrator Account</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>admin@udyogsetu.demo</div>
              </div>
            </button>
          </div>
        </div>

        <div className="proto-banner" style={{ marginTop: '20px', fontSize: '0.75rem' }}>
          <Info size={14} /> Fictional demo credentials for hackathon evaluation.
        </div>
      </div>
    </div>
  );
}
