import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { 
  Building2, Globe, Lightbulb, Bell, User, LogOut, 
  HelpCircle, Sparkles, Mic, FileText, CheckCircle2, AlertCircle
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenQuickActions }) {
  const { user, logout, demoLogin } = useAuth();
  const { lang, setLang, toggleLang, simpleMode, toggleSimpleMode, setIsAssistantOpen, notifications, t } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const getNavItems = () => {
    if (!user) return [];
    if (user.role === 'officer') {
      return [
        { id: 'officer-dashboard', label: lang === 'mr' ? 'अधिकारी डॅशबोर्ड' : lang === 'hi' ? 'अधिकारी डैशबोर्ड' : 'Officer Dashboard' },
        { id: 'officer-queue', label: lang === 'mr' ? 'अर्ज रांग' : lang === 'hi' ? 'आवेदन कतार' : 'Application Queue' },
        { id: 'officer-analytics', label: lang === 'mr' ? 'विश्लेषण' : lang === 'hi' ? 'विश्लेषिकी' : 'Analytics' },
      ];
    }
    if (user.role === 'admin') {
      return [
        { id: 'admin-dashboard', label: lang === 'mr' ? 'प्रशासक डॅशबोर्ड' : lang === 'hi' ? 'प्रशासक डैशबोर्ड' : 'Admin Overview' },
        { id: 'admin-analytics', label: lang === 'mr' ? 'प्रणाली विश्लेषण' : lang === 'hi' ? 'सिस्टम विश्लेषिकी' : 'System Analytics' },
      ];
    }
    // Entrepreneur
    return [
      { id: 'dashboard', label: t('dashboard') },
      { id: 'approvals', label: t('approvals') },
      { id: 'applications', label: t('applications') },
      { id: 'documents', label: t('documents') },
      { id: 'schemes', label: t('schemes') },
      { id: 'compliance', label: t('compliance') },
      { id: 'passport', label: t('passport') },
    ];
  };

  return (
    <header className="header-main">
      {/* Top Official Bar */}
      <div className="gov-top-bar">
        <div className="gov-names">
          <span>🏛️ Government of Maharashtra</span>
          <span>•</span>
          <span>Maharashtra State Innovation Society</span>
          <span>•</span>
          <span>Dept of Skills, Employment & Innovation</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '2px' }}>
            <button 
              onClick={() => setLang('en')} 
              style={{ background: lang === 'en' ? '#d97706' : 'transparent', color: 'white', border: 'none', padding: '3px 9px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: lang === 'en' ? '700' : '500' }}
            >
              English
            </button>
            <button 
              onClick={() => setLang('hi')} 
              style={{ background: lang === 'hi' ? '#d97706' : 'transparent', color: 'white', border: 'none', padding: '3px 9px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: lang === 'hi' ? '700' : '500' }}
            >
              हिन्दी
            </button>
            <button 
              onClick={() => setLang('mr')} 
              style={{ background: lang === 'mr' ? '#d97706' : 'transparent', color: 'white', border: 'none', padding: '3px 9px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: lang === 'mr' ? '700' : '500' }}
            >
              मराठी
            </button>
          </div>
          
          <button 
            onClick={toggleSimpleMode} 
            style={{ 
              background: simpleMode ? '#059669' : 'rgba(255,255,255,0.12)', 
              color: 'white', 
              border: simpleMode ? '1px solid #34d399' : '1px solid rgba(255,255,255,0.2)', 
              padding: '4px 10px', 
              borderRadius: '6px', 
              cursor: 'pointer', 
              fontSize: '0.8rem',
              fontWeight: '700',
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              transition: 'all 0.2s ease',
              boxShadow: simpleMode ? '0 0 10px rgba(5,150,105,0.4)' : 'none'
            }}
            title="Toggle simple terminology mode for easier understanding"
          >
            <Lightbulb size={13} color={simpleMode ? '#fbbf24' : '#cbd5e1'} />
            {simpleMode ? 'Simple Mode: ON' : 'Simple Mode: OFF'}
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="header-container">
        <div className="brand-wrapper" onClick={() => setActiveTab('dashboard')}>
          <div className="brand-logo-emblem">U</div>
          <div className="brand-titles">
            <span className="brand-title">UdyogSetu</span>
            <span className="brand-sub">Intelligent Industrial Approval & Compliance Platform</span>
          </div>
        </div>

        {/* Dynamic Navigation Links */}
        <nav className="nav-links">
          {getNavItems().map(item => (
            <button
              key={item.id}
              className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}

          {/* Ask AI Copilot button */}
          <button 
            className="nav-btn nav-btn-highlight"
            onClick={() => setIsAssistantOpen(true)}
          >
            <Sparkles size={16} /> Ask AI
          </button>

          {/* Quick Actions trigger for Citizen accessibility */}
          {user?.role === 'entrepreneur' && (
            <button 
              className="nav-btn"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
              onClick={onOpenQuickActions}
            >
              <HelpCircle size={16} /> Quick Actions
            </button>
          )}

          {/* Notifications dropdown */}
          {user && (
            <div style={{ position: 'relative' }}>
              <button 
                className="nav-btn" 
                onClick={() => setShowNotifications(!showNotifications)}
                style={{ position: 'relative', padding: '8px' }}
              >
                <Bell size={18} />
                {notifications.length > 0 && (
                  <span style={{ position: 'absolute', top: 4, right: 4, background: '#ef4444', color: 'white', fontSize: '0.65rem', borderRadius: '50%', width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {notifications.length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div style={{ position: 'absolute', right: 0, top: '40px', width: '320px', background: 'white', color: '#0f172a', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', padding: '12px', zIndex: 200, border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', marginBottom: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Notifications</span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', cursor: 'pointer' }}>Mark all read</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '250px', overflowY: 'auto' }}>
                    {notifications.map(n => (
                      <div key={n.id} style={{ background: n.type === 'warning' ? '#fef3c7' : '#f8fafc', padding: '8px', borderRadius: '6px', fontSize: '0.8rem' }}>
                        <div style={{ fontWeight: '600', color: n.type === 'warning' ? '#92400e' : '#1e293b' }}>{n.title}</div>
                        <div style={{ color: '#475569', fontSize: '0.75rem' }}>{n.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* User Profile / Role switcher */}
          {user ? (
            <div style={{ position: 'relative' }}>
              <button 
                className="nav-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '20px' }}
              >
                <User size={16} />
                <span style={{ fontSize: '0.85rem' }}>{user.name.split(' ')[0]}</span>
                <span style={{ fontSize: '0.7rem', background: '#d97706', padding: '2px 6px', borderRadius: '10px', textTransform: 'capitalize' }}>
                  {user.role}
                </span>
              </button>

              {showUserMenu && (
                <div style={{ position: 'absolute', right: 0, top: '42px', width: '220px', background: 'white', color: '#0f172a', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', padding: '8px', zIndex: 200, border: '1px solid #e2e8f0' }}>
                  <div style={{ padding: '8px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.88rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{user.email}</div>
                  </div>
                  
                  <div style={{ padding: '6px 0', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', padding: '4px 8px', fontWeight: '700' }}>SWITCH DEMO ROLE:</div>
                    <button onClick={() => { demoLogin('entrepreneur'); setActiveTab('dashboard'); setShowUserMenu(false); }} style={{ width: '100%', textAlign: 'left', padding: '6px 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}>🏢 Entrepreneur</button>
                    <button onClick={() => { demoLogin('officer'); setActiveTab('officer-dashboard'); setShowUserMenu(false); }} style={{ width: '100%', textAlign: 'left', padding: '6px 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}>👮 Govt Officer</button>
                    <button onClick={() => { demoLogin('admin'); setActiveTab('admin-dashboard'); setShowUserMenu(false); }} style={{ width: '100%', textAlign: 'left', padding: '6px 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}>⚙️ Administrator</button>
                  </div>

                  <button 
                    onClick={logout} 
                    style={{ width: '100%', textAlign: 'left', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', fontWeight: '600', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <LogOut size={14} /> Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              className="nav-btn nav-btn-highlight"
              onClick={() => setActiveTab('login')}
            >
              Login / Demo
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
