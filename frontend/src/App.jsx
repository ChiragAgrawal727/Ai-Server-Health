import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Alerts from './components/Alerts';
import Automation from './components/Automation';
import Monitors from './components/Monitors';
import Reports from './components/Reports';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <Header />
        <div className="dashboard-scroll-area">
          {activeTab === 'Dashboard' && <Dashboard />}
          {activeTab === 'Settings' && <Settings />}
          {activeTab === 'Alerts' && <Alerts />}
          {activeTab === 'Automation' && <Automation />}
          {activeTab === 'Monitors' && <Monitors />}
          {activeTab === 'Reports' && <Reports />}
          {/* Ensure fallbacks if tab not wired up yet */}
          {activeTab !== 'Dashboard' && 
           activeTab !== 'Settings' && 
           activeTab !== 'Alerts' && 
           activeTab !== 'Automation' && 
           activeTab !== 'Monitors' && 
           activeTab !== 'Reports' && (
            <div style={{ padding: '2rem', color: 'var(--text-secondary)' }}>
              <h2>{activeTab} Module</h2>
              <p>This section is currently under construction.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
