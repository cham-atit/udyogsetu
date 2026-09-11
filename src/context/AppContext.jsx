import { createContext, useContext, useState } from 'react';
import {
  INITIAL_BUSINESS,
  DEMO_APPROVALS,
  DEMO_DOCUMENTS,
  DEMO_APPLICATIONS,
  DEMO_SCHEMES,
  DEMO_INSPECTIONS,
  DEMO_COMPLIANCE_TASKS,
  DEMO_RENEWALS,
  DEMO_OFFICER_QUEUE,
  MARATHI_TRANSLATIONS,
  HINDI_TRANSLATIONS,
  ENGLISH_TRANSLATIONS
} from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' | 'hi' | 'mr'
  const [simpleMode, setSimpleMode] = useState(false);
  const [business, setBusiness] = useState(INITIAL_BUSINESS);
  const [approvals, setApprovals] = useState(DEMO_APPROVALS);
  const [documents, setDocuments] = useState(DEMO_DOCUMENTS);
  const [applications, setApplications] = useState(DEMO_APPLICATIONS);
  const [schemes, setSchemes] = useState(DEMO_SCHEMES);
  const [inspections, setInspections] = useState(DEMO_INSPECTIONS);
  const [complianceTasks, setComplianceTasks] = useState(DEMO_COMPLIANCE_TASKS);
  const [renewals, setRenewals] = useState(DEMO_RENEWALS);
  const [officerQueue, setOfficerQueue] = useState(DEMO_OFFICER_QUEUE);
  
  // Simulator adjustments state
  const [simulatedInvestment, setSimulatedInvestment] = useState(50000000); // 5 Cr default
  const [simulatedDistrict, setSimulatedDistrict] = useState('Pune');
  
  // UI Modals / Voice / Assistant states
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', title: 'Document Mismatch Detected', message: 'ETP Layout document has address inconsistency (Phase 1 vs Phase 2)', date: 'Today' },
    { id: 2, type: 'action', title: 'Action Required on Pollution Consent', message: 'Re-sign Environmental Undertaking form to resume scrutiny', date: 'Today' },
    { id: 3, type: 'info', title: 'Fire Safety Inspection Scheduled', message: 'Scheduled for 12 Sep 2026 at 11:30 AM', date: 'Yesterday' }
  ]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'mr' : 'en'));
  const toggleSimpleMode = () => setSimpleMode(prev => !prev);

  // Helper translation function
  const t = (key) => {
    if (lang === 'mr' && MARATHI_TRANSLATIONS && MARATHI_TRANSLATIONS[key]) {
      return MARATHI_TRANSLATIONS[key];
    }
    if (lang === 'hi' && HINDI_TRANSLATIONS && HINDI_TRANSLATIONS[key]) {
      return HINDI_TRANSLATIONS[key];
    }
    return ENGLISH_TRANSLATIONS[key] || key;
  };

  // Mock AI Document Upload & Pre-validation
  const uploadDocument = (docCategory, file) => {
    const newDoc = {
      id: `DOC-${documents.length + 1}`,
      title: file.name.replace(/\.[^/.]+$/, ""),
      category: docCategory,
      fileName: file.name,
      fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadDate: new Date().toISOString().split('T')[0],
      expiryDate: null,
      validationStatus: 'valid',
      validationMsg: 'AI Pre-validation passed: Document readable, category matches, promoter details verified.',
      reusableCount: 1,
      extractedName: business.name,
      extractedAddress: business.address
    };
    setDocuments(prev => [newDoc, ...prev]);
    return newDoc;
  };

  // Fix document mismatch / update document
  const resolveDocumentMismatch = (docId) => {
    setDocuments(prev => prev.map(d => {
      if (d.id === docId) {
        return {
          ...d,
          validationStatus: 'valid',
          validationMsg: 'Address mismatch resolved. Document now matches Business Passport (Chakan Phase II).',
          extractedAddress: 'Plot A-45/2, Chakan Industrial Area Phase II, Pune'
        };
      }
      return d;
    }));
  };

  // Resolve application query
  const resolveApplicationQuery = (appId) => {
    setApplications(prev => prev.map(app => {
      if (app.appId === appId) {
        const updatedStages = app.stages.map(s => {
          if (s.name === 'Department Scrutiny') return { ...s, warning: false, current: true, date: 'Query Resolved Today' };
          return s;
        });
        return {
          ...app,
          status: 'in-progress',
          slaStatus: 'on-track',
          delayRisk: 'LOW',
          query: null,
          stages: updatedStages,
          delayDiagnosis: {
            bottleneck: 'Query Resolved - Resumed Officer Scrutiny',
            waitingDays: 0,
            possibleDependency: 'MPCB Technical Officer Approval',
            recommendedAction: 'No further action required from applicant. Processing resumed.'
          }
        };
      }
      return app;
    }));

    // Update approval status in graph
    setApprovals(prev => prev.map(ap => {
      if (ap.id === 'APP-02') {
        return { ...ap, status: 'in-progress' };
      }
      return ap;
    }));
  };

  // Readiness Score calculation
  const calculateReadinessScore = () => {
    const docScore = 85;
    const infoScore = 100;
    const eligibilityScore = 90;
    const hasMismatch = documents.some(d => d.validationStatus === 'mismatch' || d.validationStatus === 'action-needed');
    const consistencyScore = hasMismatch ? 65 : 95;
    
    const total = Math.round((docScore * 0.3) + (infoScore * 0.25) + (eligibilityScore * 0.2) + (consistencyScore * 0.25));
    return {
      total,
      docScore,
      infoScore,
      eligibilityScore,
      consistencyScore,
      hasMismatch
    };
  };

  // Simulate changing project parameters (Project Impact Simulator)
  const updateSimulatedProject = (newInvestment, newDistrict) => {
    setSimulatedInvestment(newInvestment);
    setSimulatedDistrict(newDistrict);
  };

  return (
    <AppContext.Provider value={{
      lang,
      setLang,
      toggleLang,
      simpleMode,
      setSimpleMode,
      toggleSimpleMode,
      t,
      business,
      setBusiness,
      approvals,
      setApprovals,
      documents,
      setDocuments,
      uploadDocument,
      resolveDocumentMismatch,
      applications,
      setApplications,
      resolveApplicationQuery,
      schemes,
      setSchemes,
      inspections,
      setInspections,
      complianceTasks,
      setComplianceTasks,
      renewals,
      setRenewals,
      officerQueue,
      setOfficerQueue,
      calculateReadinessScore,
      simulatedInvestment,
      simulatedDistrict,
      updateSimulatedProject,
      isAssistantOpen,
      setIsAssistantOpen,
      isVoiceListening,
      setIsVoiceListening,
      notifications,
      setNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
