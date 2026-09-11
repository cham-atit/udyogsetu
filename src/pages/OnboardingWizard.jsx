import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building, MapPin, Factory, IndianRupee, Layers, 
  ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Loader2 
} from 'lucide-react';

export default function OnboardingWizard({ onNavigate }) {
  const { setBusiness } = useApp();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: 'Sahyadri Foods Pvt. Ltd.',
    category: 'Food Processing & Agro-Industry',
    district: 'Pune',
    industrialArea: 'Chakan MIDC Phase II',
    investmentAmount: 50000000,
    employeeCount: 50,
    projectStage: 'Installation & Construction',
    landAreaSqFt: 45000
  });

  const districts = ['Pune', 'Nashik', 'Chhatrapati Sambhajinagar', 'Nagpur', 'Thane', 'Solapur', 'Ratnagiri', 'Kolhapur'];
  const categories = ['Food Processing & Agro-Industry', 'Textiles & Garments', 'Chemicals & Petrochemicals', 'Automotive & Engineering', 'Pharmaceuticals', 'Electronics & IT'];
  const stages = ['Planning', 'Land Acquisition', 'Construction', 'Installation & Construction', 'Starting Operations', 'Existing Business', 'Expansion'];

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Step 5 finish -> Show processing animation
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setBusiness(prev => ({ ...prev, ...formData }));
        onNavigate('approvals');
      }, 2000);
    }
  };

  return (
    <div style={{ maxWidth: '720px', margin: '20px auto', width: '100%' }}>
      
      {/* Progress Bar */}
      <div className="card" style={{ marginBottom: '24px', padding: '16px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: '#0e2439' }}>
          <span>Step {step} of 5</span>
          <span>{Math.round((step / 5) * 100)}% Completed</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / 5) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #d97706, #10b981)', transition: 'width 0.3s ease' }} />
        </div>
      </div>

      {/* Main Wizard Card */}
      <div className="card" style={{ padding: '32px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
        
        {isProcessing ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <Loader2 size={48} color="#d97706" className="animate-spin" style={{ margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0e2439' }}>Generating Your Personalized Approval Journey...</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '8px' }}>
              Scanning statutory rulebooks, checking Maharashtra MIDC & MPCB dependencies, and organizing parallel clearances for <strong>{formData.name}</strong>.
            </p>
            <div style={{ marginTop: '24px', display: 'inline-flex', gap: '8px', alignItems: 'center', background: '#d1fae5', color: '#065f46', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700' }}>
              <CheckCircle2 size={16} /> 12 Approvals Identified • Parallel Optimization Applied
            </div>
          </div>
        ) : (
          <>
            {/* Step 1: Tell us about your business */}
            {step === 1 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Building color="#d97706" size={24} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0e2439', margin: 0 }}>Step 1 — Tell us about your business</h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Enter your company title and primary operational designation.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Business / Company Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Number of Proposed Employees</label>
                    <input 
                      type="number" 
                      value={formData.employeeCount}
                      onChange={e => setFormData({ ...formData, employeeCount: Number(e.target.value) })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Where is your project? */}
            {step === 2 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <MapPin color="#d97706" size={24} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0e2439', margin: 0 }}>Step 2 — Where is your project?</h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Location dictates environmental zones (D/D+ zones) and MIDC authority jurisdiction.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Select District</label>
                    <select 
                      value={formData.district}
                      onChange={e => setFormData({ ...formData, district: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    >
                      {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Industrial Area / Estate</label>
                    <input 
                      type="text" 
                      value={formData.industrialArea}
                      onChange={e => setFormData({ ...formData, industrialArea: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: What industry are you in? */}
            {step === 3 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Factory color="#d97706" size={24} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0e2439', margin: 0 }}>Step 3 — What industry are you in?</h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Industry classification triggers specific permits like FSSAI food permits or DISH factory permits.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {categories.map(cat => (
                    <div 
                      key={cat}
                      onClick={() => setFormData({ ...formData, category: cat })}
                      style={{ 
                        padding: '14px 18px', 
                        borderRadius: '10px', 
                        border: formData.category === cat ? '2px solid #d97706' : '1px solid #e2e8f0',
                        background: formData.category === cat ? '#fef3c7' : '#ffffff',
                        cursor: 'pointer',
                        fontWeight: formData.category === cat ? '700' : '500',
                        fontSize: '0.95rem'
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: How much are you investing? */}
            {step === 4 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <IndianRupee color="#d97706" size={24} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0e2439', margin: 0 }}>Step 4 — How much are you investing?</h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Capital investment determines MSME status, statutory fee tiers, and government subsidies.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Total Capital Investment (in Rupees)</label>
                    <input 
                      type="number" 
                      value={formData.investmentAmount}
                      onChange={e => setFormData({ ...formData, investmentAmount: Number(e.target.value) })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1.1rem', fontWeight: '700' }}
                    />
                    <div style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: '700', marginTop: '6px' }}>
                      Equivalent: ₹{(formData.investmentAmount / 10000000).toFixed(2)} Crore (MSME Medium Enterprise)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: What stage is your project in? */}
            {step === 5 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Layers color="#d97706" size={24} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0e2439', margin: 0 }}>Step 5 — What stage is your project in?</h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Select your current status to order approvals by immediate priority.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {stages.map(st => (
                    <div 
                      key={st}
                      onClick={() => setFormData({ ...formData, projectStage: st })}
                      style={{ 
                        padding: '14px', 
                        borderRadius: '10px', 
                        border: formData.projectStage === st ? '2px solid #d97706' : '1px solid #e2e8f0',
                        background: formData.projectStage === st ? '#fef3c7' : '#ffffff',
                        cursor: 'pointer',
                        fontWeight: formData.projectStage === st ? '700' : '500',
                        fontSize: '0.9rem',
                        textAlign: 'center'
                      }}
                    >
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step Controls */}
            <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
              <button 
                type="button" 
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="btn btn-outline"
                style={{ opacity: step === 1 ? 0.4 : 1 }}
              >
                <ArrowLeft size={16} /> Previous Step
              </button>

              <button 
                type="button" 
                onClick={handleNext}
                className="btn btn-saffron"
                style={{ padding: '12px 24px' }}
              >
                {step === 5 ? 'Generate My Approval Journey 🚀' : 'Next Step'} <ArrowRight size={16} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
