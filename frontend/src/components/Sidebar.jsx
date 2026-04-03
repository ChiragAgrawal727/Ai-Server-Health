import React from 'react';
import { Home, FileText, Bell, Activity, GitCommit, Settings as SettingsIcon } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: FileText, label: 'Reports' },
  { icon: Bell, label: 'Alerts' },
  { icon: Activity, label: 'Monitors' },
  { icon: GitCommit, label: 'Automation' },
  { icon: SettingsIcon, label: 'Settings' },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">Site24x7</div>
        <div className="logo-text">AI HEALTH DASHBOARD</div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.label;
          return (
            <a 
              key={index} 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveTab(item.label); }}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} className="nav-icon" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
