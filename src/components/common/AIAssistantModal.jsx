import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, Mic, Send, X, Bot, User, HelpCircle, 
  CheckCircle, ArrowRight, ShieldCheck, MessageSquare
} from 'lucide-react';

export default function AIAssistantModal() {
  const { isAssistantOpen, setIsAssistantOpen, isVoiceListening, setIsVoiceListening, approvals, documents, applications, schemes } = useApp();
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Namaste! How can UdyogSetu help you today with industrial approvals, document pre-validation, or government subvention schemes?"
    }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isAssistantOpen) return null;

  const quickPrompts = [
    { label: "Find approvals", query: "What approvals do I need for Food Processing in Pune?" },
    { label: "Check application", query: "Why is my Consent to Establish application delayed?" },
    { label: "Find schemes", query: "What government subsidies am I eligible for?" },
    { label: "Explain a requirement", query: "Explain MPCB Consent to Establish requirement and documents." }
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Generate intelligent AI response based on system state & regulatory knowledge
    setTimeout(() => {
      let botResponse = "";
      const lower = text.toLowerCase();

      if (lower.includes('food processing') || lower.includes('approval') || lower.includes('find approvals')) {
        botResponse = "For a Food Processing unit in Pune (₹5 Cr investment), UdyogSetu identified 12 statutory approvals. Key mandatory clearances: 1) MIDC Land NOC, 2) MPCB Consent to Establish (CTE), 3) Provisional Fire NOC, and 4) FSSAI Manufacturing License. Land, Fire, and Building approvals can run in parallel!";
      } else if (lower.includes('delay') || lower.includes('consent to establish') || lower.includes('check application') || lower.includes('status')) {
        botResponse = "Your application MH-DEMO-20482 (Consent to Establish) has an SLA Delay Risk of HIGH. MPCB raised a query regarding an address discrepancy in your ETP Layout (Phase 1 vs Phase 2). Resolving this in the Document Vault will unblock scrutiny immediately.";
      } else if (lower.includes('scheme') || lower.includes('subsidy') || lower.includes('incentive') || lower.includes('find schemes')) {
        botResponse = "Based on your ₹5 Cr investment in Chakan MIDC (Group D+ area), you have a 94% match for the Maharashtra Package Scheme of Incentives (PSI 2019) offering 80% capital subsidy / SGST reimbursement, plus 88% match for CM Food Processing Scheme.";
      } else if (lower.includes('explain') || lower.includes('requirement')) {
        botResponse = "MPCB Consent to Establish (CTE) is the mandatory environmental clearance required before starting plant construction. It verifies your Effluent Treatment Plant (ETP) capacity and air pollution control equipment.";
      } else {
        botResponse = `Based on your business profile for Sahyadri Foods Pvt. Ltd., you currently have 7 active approvals, 1 pending document query, and 3 matched government schemes. How else can UdyogSetu guide you?`;
      }

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: botResponse,
        disclaimer: "AI-assisted guidance based on statutory business rules. Official decisions rest with competent authorities."
      }]);
    }, 500);
  };

  const handleVoiceSimulate = () => {
    setIsVoiceListening(true);
    setTimeout(() => {
      setIsVoiceListening(false);
      const voiceQuery = "What approvals do I need for Food Processing in Pune?";
      setInputText(voiceQuery);
      handleSend(voiceQuery);
    }, 2000);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(10, 25, 47, 0.75)', backdropFilter: 'blur(4px)', zIndex: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: 'white', width: '100%', maxWidth: '680px', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(10, 25, 47, 0.3)', overflow: 'hidden', height: '620px', display: 'flex', flexDirection: 'column' }}>
        
        {/* Assistant Header */}
        <div style={{ background: 'linear-gradient(135deg, #0a192f, #162a45)', color: 'white', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#d97706', width: 40, height: 40, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0, color: 'white' }}>Ask UdyogSetu</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', margin: 0 }}>Intelligent Regulatory Assistant • How can UdyogSetu help?</p>
            </div>
          </div>
          <button onClick={() => setIsAssistantOpen(false)} style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: 'none', borderRadius: '50%', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        {/* Chat Messages */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', background: '#f8fafc' }}>
          {messages.map((m, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '12px', justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              {m.sender === 'bot' && (
                <div style={{ background: '#0a192f', color: '#fbbf24', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot size={18} />
                </div>
              )}
              <div style={{ 
                maxWidth: '82%', 
                background: m.sender === 'user' ? '#1e40af' : '#ffffff', 
                color: m.sender === 'user' ? '#ffffff' : '#0f172a',
                padding: '14px 18px', 
                borderRadius: '16px',
                boxShadow: '0 2px 6px rgba(15,23,42,0.04)',
                border: m.sender === 'bot' ? '1px solid #e2e8f0' : 'none',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                <div>{m.text}</div>
                {m.disclaimer && (
                  <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #f1f5f9', fontSize: '0.74rem', color: '#64748b', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={13} color="#d97706" /> {m.disclaimer}
                  </div>
                )}
              </div>
              {m.sender === 'user' && (
                <div style={{ background: '#1e40af', color: 'white', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <User size={16} />
                </div>
              )}
            </div>
          ))}

          {isVoiceListening && (
            <div style={{ background: '#fffbeb', border: '1px solid #f59e0b', borderRadius: '12px', padding: '12px', textAlign: 'center', color: '#b45309', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Mic size={18} className="animate-pulse" />
              <span>Listening to voice speech input...</span>
            </div>
          )}
        </div>

        {/* 4 Quick Prompts */}
        <div style={{ padding: '12px 20px', background: '#ffffff', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {quickPrompts.map((p, idx) => (
            <button 
              key={idx} 
              onClick={() => handleSend(p.query)}
              style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '6px 14px', fontSize: '0.78rem', color: '#1e293b', fontWeight: '600', whiteSpace: 'nowrap', cursor: 'pointer' }}
            >
              ⚡ {p.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div style={{ padding: '16px 20px', background: '#ffffff', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button 
            onClick={handleVoiceSimulate}
            style={{ 
              background: isVoiceListening ? '#dc2626' : '#f1f5f9', 
              color: isVoiceListening ? 'white' : '#0f172a',
              border: 'none', borderRadius: '10px', padding: '12px', cursor: 'pointer' 
            }}
            title="Simulate Voice Input"
          >
            <Mic size={18} />
          </button>

          <input 
            type="text" 
            placeholder="Ask UdyogSetu anything about approvals, delays, schemes..."
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            style={{ flex: 1, padding: '12px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.92rem', outline: 'none' }}
          />

          <button 
            onClick={() => handleSend()}
            style={{ background: '#0a192f', color: 'white', border: 'none', borderRadius: '10px', padding: '12px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontSize: '0.9rem' }}
          >
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
