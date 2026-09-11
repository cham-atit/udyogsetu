import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  FileText, Upload, CheckCircle2, AlertTriangle, RefreshCw, 
  Search, Eye, ShieldCheck, AlertCircle, FileCheck
} from 'lucide-react';

export default function DocumentVaultPage() {
  const { documents, uploadDocument, resolveDocumentMismatch, business } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploading, setUploading] = useState(false);

  const categories = ['All', 'Land', 'Building', 'Safety', 'Environmental', 'Business', 'Labour', 'Financial'];

  const filteredDocs = documents.filter(doc => {
    const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSimulatedUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setTimeout(() => {
      uploadDocument('Technical', file);
      setUploading(false);
    }, 1200);
  };

  const validCount = documents.filter(d => d.validationStatus === 'valid').length;
  const mismatchCount = documents.filter(d => d.validationStatus === 'mismatch' || d.validationStatus === 'action-needed').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Banner */}
      <div className="card" style={{ background: 'var(--primary-gradient)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ background: '#10b981', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              My Documents Vault
            </span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '6px', color: 'white' }}>
              Document Intelligence & Vault
            </h1>
            <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>
              Upload once, pre-validate automatically, and reuse across all statutory applications.
            </p>
          </div>

          <label className="btn btn-saffron" style={{ cursor: 'pointer', padding: '12px 20px' }}>
            <Upload size={16} /> Upload New Document
            <input type="file" onChange={handleSimulatedUpload} style={{ display: 'none' }} />
          </label>
        </div>
      </div>

      {/* Vault Statistics & Cross-Document Mismatch Bar */}
      <div className="grid-3">
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Total Uploaded Documents</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0e2439' }}>{documents.length}</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700' }}>100% Secure Encrypted</div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>AI Pre-Validated</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#10b981' }}>{validCount}</div>
          <div style={{ fontSize: '0.75rem', color: '#047857' }}>Ready for Department Scrutiny</div>
        </div>

        <div className="card" style={{ textAlign: 'center', border: mismatchCount > 0 ? '2px solid #f59e0b' : '1px solid #e2e8f0', background: mismatchCount > 0 ? '#fef3c7' : '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', color: '#92400e' }}>Cross-Doc Mismatches Detected</div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#d97706' }}>{mismatchCount}</div>
          <div style={{ fontSize: '0.75rem', color: '#b45309', fontWeight: '700' }}>Review Recommended</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{ 
                background: selectedCategory === cat ? '#0e2439' : '#f1f5f9', 
                color: selectedCategory === cat ? 'white' : '#475569',
                border: 'none', 
                padding: '6px 14px', 
                borderRadius: '20px', 
                fontSize: '0.82rem', 
                fontWeight: '600',
                cursor: 'pointer' 
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', minWidth: '240px' }}>
          <Search size={16} style={{ position: 'absolute', left: 10, top: 10, color: '#94a3b8' }} />
          <input 
            type="text" 
            placeholder="Search document name..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '6px 12px 6px 32px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
          />
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid-2">
        {filteredDocs.map(doc => (
          <div key={doc.id} className="card" style={{ borderLeft: `5px solid ${doc.validationStatus === 'valid' ? '#10b981' : doc.validationStatus === 'mismatch' ? '#f59e0b' : '#ef4444'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <span className="badge badge-neutral" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>{doc.category}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>{doc.title}</h3>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{doc.fileName} • {doc.fileSize}</div>
              </div>

              {doc.validationStatus === 'valid' && <span className="badge badge-success">✓ Verified</span>}
              {doc.validationStatus === 'mismatch' && <span className="badge badge-warning">⚠ Mismatch</span>}
              {doc.validationStatus === 'warning' && <span className="badge badge-warning">⏰ Expiring Soon</span>}
              {doc.validationStatus === 'action-needed' && <span className="badge badge-danger">⚠ Action Needed</span>}
            </div>

            {/* AI Pre-Validation Status */}
            <div style={{ background: doc.validationStatus === 'mismatch' ? '#fef3c7' : '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#334155', margin: '10px 0' }}>
              <strong>AI Pre-Validation Insight:</strong> {doc.validationMsg}
            </div>

            {/* Extracted Address details */}
            <div style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div>Extracted Address: <strong>{doc.extractedAddress}</strong></div>
              <div>Reused in: <strong>{doc.reusableCount} Statutory Applications</strong></div>
            </div>

            <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {doc.validationStatus === 'mismatch' ? (
                <button 
                  className="btn btn-saffron" 
                  style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                  onClick={() => resolveDocumentMismatch(doc.id)}
                >
                  Fix Mismatch Now
                </button>
              ) : (
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Uploaded: {doc.uploadDate}</span>
              )}

              <button className="btn btn-outline" style={{ padding: '4px 10px', fontSize: '0.78rem' }} onClick={() => alert(`Previewing ${doc.fileName}`)}>
                <Eye size={14} /> Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
