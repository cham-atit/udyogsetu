import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ background: '#d97706', width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>U</div>
            <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>UdyogSetu</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6' }}>
            Single-Window Intelligent Journey Platform for Industrial Approvals, Compliance & Government Incentives.
          </p>
          <div className="proto-banner" style={{ marginTop: '14px' }}>
            <Info size={16} />
            <span><strong>Hackathon Prototype — Demonstration Platform</strong>. Not an officially deployed Government service.</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700', marginBottom: '12px' }}>Government Partners</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>• Government of Maharashtra</li>
            <li>• Maharashtra State Innovation Society (MSINS)</li>
            <li>• Department of Skills, Employment, Entrepreneurship & Innovation</li>
            <li>• Maharashtra Industrial Development Corporation (MIDC)</li>
            <li>• Maharashtra Pollution Control Board (MPCB)</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700', marginBottom: '12px' }}>Intelligent Features</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>• Approval Dependency Graph & Parallel Optimizer</li>
            <li>• AI Document Pre-Validation & Mismatch Detection</li>
            <li>• SLA Risk Predictor & Bottleneck Diagnosis</li>
            <li>• Project Impact Simulator (What-If Analysis)</li>
            <li>• Continuous Compliance Calendar & Renewals</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700', marginBottom: '12px' }}>Help & Accessibility</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '8px' }}>
            Designed for educated & low digital literacy citizens alike.
          </p>
          <div style={{ background: '#1e293b', padding: '10px', borderRadius: '6px', fontSize: '0.8rem', color: '#cbd5e1' }}>
            <div>📞 Toll-Free Helpline: 1800-233-0011 (Demo)</div>
            <div>✉️ Support: helpdesk@udyogsetu.demo</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 UdyogSetu Project — Built for National-Level Hackathon Demonstration. All rights reserved.</div>
      </div>
    </footer>
  );
}
