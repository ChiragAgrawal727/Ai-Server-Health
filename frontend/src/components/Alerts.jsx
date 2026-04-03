import React from 'react';
import { AlertCircle, AlertTriangle, ChevronDown, Download, AlertCircle as AlertIcon } from 'lucide-react';
import './Alerts.css';

const Alerts = () => {
  return (
    <div className="alerts-container fade-in">
      
      {/* Header Section */}
      <div className="alerts-header">
        <div>
          <h2>Real-time AI Alerts & Incidents</h2>
        </div>
        <button className="download-btn">
          <Download size={16} /> Download PDF Incident Report up to Now [:SS]
        </button>
      </div>

      {/* Top Overview Section */}
      <div className="alert-overview-card glass-panel">
        <div className="overview-header">
          <h3>Alert Overview</h3>
        </div>
        
        <div className="overview-content">
          <div className="overview-total">
            <span className="total-number">124</span>
            <span className="total-label">Alert Overview</span>
          </div>
          
          <div className="overview-bars">
            <div className="bar-column">
              <div className="bar-wrapper">
                <div className="bar bg-red" style={{ height: '40%' }}></div>
                <div className="bar bg-red-dim" style={{ height: '20%' }}></div>
              </div>
              <span className="bar-label">Critical (4)</span>
            </div>

            <div className="bar-column">
              <div className="bar-wrapper">
                <div className="bar bg-yellow" style={{ height: '70%' }}></div>
                <div className="bar bg-yellow-dim" style={{ height: '30%' }}></div>
              </div>
              <span className="bar-label">Warning (12)</span>
            </div>

            <div className="bar-column">
              <div className="bar-wrapper">
                <div className="bar bg-blue" style={{ height: '25%' }}></div>
                <div className="bar bg-blue-dim" style={{ height: '15%' }}></div>
              </div>
              <span className="bar-label">Info (3)</span>
            </div>

            <div className="bar-column">
              <div className="bar-wrapper">
                <div className="bar bg-green" style={{ height: '60%' }}></div>
                <div className="bar bg-green-dim" style={{ height: '20%' }}></div>
              </div>
              <span className="bar-label">Predictive AI Warnings (6)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="alerts-bottom-grid">
        {/* Active Alerts Table */}
        <div className="active-alerts-panel glass-panel">
          <div className="panel-header">
            <h3>Active Alerts</h3>
            <span className="menu-dots">⋮</span>
          </div>
          
          <div className="table-responsive">
            <table className="alerts-table">
              <thead>
                <tr>
                  <th>Severity</th>
                  <th>Time ↓</th>
                  <th>Component</th>
                  <th>Type</th>
                  <th>AI Prediction</th>
                  <th>AI Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center-cell"><AlertCircle size={16} className="text-red" /></td>
                  <td>2022-03-26 13:25:31</td>
                  <td>Server</td>
                  <td>CPU Spike</td>
                  <td className="text-red">Crash probable<br/>in 30 mins</td>
                  <td className="text-blue action-cell">Suggested command<br/>-command &gt;logs <ChevronDown size={14}/></td>
                </tr>
                <tr>
                  <td className="center-cell"><AlertTriangle size={16} className="text-yellow" /></td>
                  <td>2022-03-26 13:25:36</td>
                  <td>Server</td>
                  <td>Network Anomaly</td>
                  <td className="text-yellow">Crash probable<br/>in 30 mins</td>
                  <td className="text-blue action-cell">Suggested command<br/>&gt;noom 4GK <ChevronDown size={14}/></td>
                </tr>
                <tr>
                  <td className="center-cell"><AlertTriangle size={16} className="text-yellow" /></td>
                  <td>2022-03-26 13:25:01</td>
                  <td>Server</td>
                  <td>CPU Spike</td>
                  <td className="text-yellow">Crash probable<br/>in 30 mins</td>
                  <td className="text-blue action-cell">Suggested command<br/>-command &gt;logs <ChevronDown size={14}/></td>
                </tr>
                <tr>
                  <td className="center-cell"><AlertTriangle size={16} className="text-yellow" /></td>
                  <td>2022-03-26 13:25:07</td>
                  <td>Server/Resource</td>
                  <td>Network Anomaly</td>
                  <td className="text-yellow">Crash probable<br/>in 30 mins</td>
                  <td className="text-blue action-cell">Suggested command <ChevronDown size={14}/></td>
                </tr>
                <tr className="active-row">
                  <td className="center-cell"><AlertCircle size={16} className="text-red" /></td>
                  <td>2022-03-26 13:36:55</td>
                  <td>Server</td>
                  <td>CPU Spike</td>
                  <td className="text-red">Crash probable<br/>in 30 mins</td>
                  <td className="text-blue action-cell">CPU Spike <ChevronDown size={14}/></td>
                </tr>
                 <tr>
                  <td className="center-cell"><AlertTriangle size={16} className="text-yellow" /></td>
                  <td>2022-03-26 13:36:00</td>
                  <td>Server</td>
                  <td>Network Anom...</td>
                  <td className="text-yellow">Crash probable<br/>in 30 mins</td>
                  <td className="text-blue action-cell">Suggested command<br/>command &gt;logs <ChevronDown size={14}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Incident Timeline */}
        <div className="incident-timeline-panel glass-panel">
          <div className="panel-header">
            <h3>Incident Response Timeline</h3>
            <span className="menu-dots">⋮</span>
          </div>

          <div className="timeline-container">
            <div className="timeline-header-alert">
              <span className="timeline-icon bg-red-dim"><AlertIcon className="text-red" size={14} /></span>
              <span>Selected Major Alert</span>
            </div>

            <div className="timeline-tree-container">
              <ul className="timeline-tree">
                <li>
                  <div className="tree-node"><span className="dot bg-green"></span> System and Actions</div>
                  <ul className="sub-tree">
                    <li>
                      <div className="tree-node"><span className="dot bg-green"></span> Automated AI Actions taken<br/><span className="sub-text">Actions</span></div>
                      <ul className="sub-tree">
                        <li>
                          <div className="tree-node"><span className="dot bg-yellow"></span> Automated AI Actions<br/><span className="sub-text">Completed</span></div>
                        </li>
                        <li>
                          <div className="tree-node"><span className="dot bg-yellow"></span> Automated AI Actions taken<br/><span className="sub-text">Actions</span></div>
                        </li>
                        <li>
                          <div className="tree-node"><span className="dot bg-green"></span> Automated AI Actions Taken<br/><span className="sub-text">Actions</span></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
