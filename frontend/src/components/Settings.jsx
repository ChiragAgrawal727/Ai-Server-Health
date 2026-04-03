import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, GitBranch, Shield, Brain, Save, ChevronDown, Moon, Sun } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [activePane, setActivePane] = useState('general');
  const [sensitivity, setSensitivity] = useState(70);
  const [theme, setTheme] = useState('dark');

  return (
    <div className="settings-container fade-in">
      <div className="settings-header">
        <div className="header-info">
          <h2>Settings</h2>
        </div>
        <button className="primary-btn save-btn top-save">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="settings-layout">
        {/* Left Nav Pane */}
        <div className="settings-sidebar glass-panel">
          <ul className="settings-nav">
            <li className={activePane === 'general' ? 'active' : ''} onClick={() => setActivePane('general')}>
              <SettingsIcon size={18} /> General
            </li>
            <li className={activePane === 'alerts' ? 'active' : ''} onClick={() => setActivePane('alerts')}>
              <Bell size={18} /> Alerts
            </li>
            <li className={activePane === 'integrations' ? 'active' : ''} onClick={() => setActivePane('integrations')}>
              <GitBranch size={18} /> Integrations
            </li>
            <li className={activePane === 'security' ? 'active' : ''} onClick={() => setActivePane('security')}>
              <Shield size={18} /> Security
            </li>
            <li className={activePane === 'ai' ? 'active' : ''} onClick={() => setActivePane('ai')}>
              <Brain size={18} /> AI Settings
            </li>
          </ul>
        </div>

        {/* Main Content Pane */}
        <div className="settings-content glass-panel">
          {activePane === 'general' && (
            <div className="settings-section fade-in">
              <h3>General</h3>
              <div className="setting-group">
                <label className="setting-label">Client Name</label>
                <input type="text" className="custom-input" defaultValue="Chirag Patel" />
              </div>

              <div className="setting-group">
                <label className="setting-label">Email Address</label>
                <input type="email" className="custom-input" defaultValue="chirag.patel@email.com" />
              </div>

              <div className="setting-group">
                <label className="setting-label">Time Zone</label>
                <div className="select-wrapper">
                  <select className="custom-select">
                    <option>(GMT +5:30) India Standard Time</option>
                    <option>(GMT +0:00) UTC</option>
                    <option>(GMT -5:00) Eastern Standard Time</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>

              <div className="setting-group">
                <label className="setting-label">Theme</label>
                <div className="theme-toggle">
                  <button 
                    className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => setTheme('dark')}
                  >
                    <Moon size={14} /> Dark
                  </button>
                  <button 
                    className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => setTheme('light')}
                  >
                    <Sun size={14} /> Light
                  </button>
                </div>
              </div>

              <div className="form-footer">
                <button className="primary-btn save-btn">
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activePane === 'ai' && (
            <div className="settings-section fade-in">
              <h3>AI Engine & Detection Profile</h3>
              <div className="setting-group">
                <label className="setting-label">Anomaly Sensitivity: {sensitivity}%</label>
                <div className="slider-container">
                  <span>Relaxed</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sensitivity} 
                    onChange={(e) => setSensitivity(e.target.value)} 
                    className="custom-slider"
                  />
                  <span>Strict</span>
                </div>
                <p className="setting-desc">Higher sensitivity will flag subtle deviations sooner, preventing stealthy memory leaks.</p>
              </div>

              <div className="setting-group split">
                <div className="setting-text">
                  <label className="setting-label">Predictive Horizon</label>
                  <p className="setting-desc">How far forward the AI predicts future server load.</p>
                </div>
                <div className="select-wrapper compact">
                  <select className="custom-select">
                    <option value="2">2 Hours (High Accuracy)</option>
                    <option value="12">12 Hours (Balanced)</option>
                    <option value="24">24 Hours (Trend-based)</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>

              <div className="setting-group split">
                <div className="setting-text">
                  <label className="setting-label">Baseline Auto-Tuning</label>
                  <p className="setting-desc">Allow the AI to adjust normal thresholds based on historical weekday/weekend patterns automatically.</p>
                </div>
                <label className="custom-toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {/* Placeholder Panes */}
          {(activePane === 'alerts' || activePane === 'integrations' || activePane === 'security') && (
            <div className="settings-section fade-in">
              <h3>{activePane.charAt(0).toUpperCase() + activePane.slice(1)} Settings</h3>
              <p className="setting-desc">Configure your {activePane} parameters here.</p>
              <div className="placeholder-content">
                 <p>This module is currently read-only.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
