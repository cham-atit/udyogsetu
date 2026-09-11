import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider, useApp } from './context/AppContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import QuickActionsModal from './components/common/QuickActionsModal';
import AIAssistantModal from './components/common/AIAssistantModal';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import OnboardingWizard from './pages/OnboardingWizard';
import EntrepreneurDashboard from './pages/EntrepreneurDashboard';
import BusinessPassportPage from './pages/BusinessPassportPage';
import ApprovalFinderPage from './pages/ApprovalFinderPage';
import DocumentVaultPage from './pages/DocumentVaultPage';
import ApplicationTrackerPage from './pages/ApplicationTrackerPage';
import SchemeMatcherPage from './pages/SchemeMatcherPage';
import ProjectSimulatorPage from './pages/ProjectSimulatorPage';
import ComplianceCenterPage from './pages/ComplianceCenterPage';
import InspectionsPage from './pages/InspectionsPage';
import GrievancesPage from './pages/GrievancesPage';
import OfficerDashboardPage from './pages/OfficerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function MainApp() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('landing');
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} onOpenQuickActions={() => setIsQuickActionsOpen(true)} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'onboarding':
        return <OnboardingWizard onNavigate={handleNavigate} />;
      case 'dashboard':
        return <EntrepreneurDashboard onNavigate={handleNavigate} onOpenQuickActions={() => setIsQuickActionsOpen(true)} />;
      case 'passport':
        return <BusinessPassportPage />;
      case 'approvals':
        return <ApprovalFinderPage onNavigate={handleNavigate} />;
      case 'documents':
        return <DocumentVaultPage />;
      case 'applications':
        return <ApplicationTrackerPage />;
      case 'inspections':
        return <InspectionsPage />;
      case 'schemes':
        return <SchemeMatcherPage />;
      case 'simulator':
        return <ProjectSimulatorPage onNavigate={handleNavigate} />;
      case 'compliance':
        return <ComplianceCenterPage />;
      case 'grievances':
        return <GrievancesPage />;
      case 'officer-dashboard':
      case 'officer-queue':
      case 'officer-analytics':
        return <OfficerDashboardPage />;
      case 'admin-dashboard':
      case 'admin-analytics':
        return <AdminDashboardPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} onOpenQuickActions={() => setIsQuickActionsOpen(true)} />;
    }
  };

  return (
    <div className="app-layout">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleNavigate}
        onOpenQuickActions={() => setIsQuickActionsOpen(true)} 
      />

      <main className="main-content">
        {renderActivePage()}
      </main>

      <Footer />

      {/* Global Accessibility & AI Modals */}
      <QuickActionsModal 
        isOpen={isQuickActionsOpen} 
        onClose={() => setIsQuickActionsOpen(false)} 
        onNavigate={handleNavigate} 
      />

      <AIAssistantModal />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <MainApp />
      </AppProvider>
    </AuthProvider>
  );
}