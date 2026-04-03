import React from 'react';
import { Download, ChevronDown, Activity, ShieldAlert, Clock, Info } from 'lucide-react';
import './Monitors.css';

const ServerCard = ({ name, status, statusType, color }) => {
  return (
    <div className={`server-card glass-panel ${statusType === 'warning' ? 'border-warning' : statusType === 'critical' ? 'border-critical' : ''}`}>
      <div className="server-card-header">
        <div className="server-name">
          <span className={`status-dot ${color}`}></span>
          {name}
        </div>
        <span className={`status-badge ${statusType}`}>{status}</span>
      </div>
      
      <div className="server-card-body">
        <div className="sparkline-container">
          <p className="sparkline-label">Real-time graph</p>
          <div className="mini-sparkline">
            <svg viewBox="0 0 200 60" preserveAspectRatio="none">
              <path 
                d="M0,45 Q20,35 40,50 T80,30 T120,40 T160,10 L200,45" 
                fill="none" 
                stroke={statusType === 'warning' ? 'var(--accent-orange)' : statusType === 'critical' ? 'var(--accent-red)' : 'var(--accent-green)'} 
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="mini-metrics">
          <div className="metric-row">
            <span className="metric-label">CPU</span>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '65%', backgroundColor: 'var(--accent-green)' }}></div>
            </div>
          </div>
          <div className="metric-row">
            <span className="metric-label">RAM</span>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '45%', backgroundColor: 'var(--accent-green)' }}></div>
            </div>
          </div>
          <div className="metric-row">
            <span className="metric-label">Disk</span>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '30%', backgroundColor: 'var(--accent-green)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Monitors = () => {
  return (
    <div className="monitors-container fade-in">
      <div className="monitors-header">
        <div className="header-breadcrumbs">
          <h2>Infrastructure Monitors <span className="separator">/</span> <span className="sub-title">Chirag's Servers</span></h2>
        </div>
        <div className="header-actions">
           <div className="rt-data">
              <Activity size={16} className="text-green" />
              <span>Real-time data</span>
           </div>
           <div className="mode-tabs">
            <span className="mode-label">Time interval</span>
            <button className="mode-btn">
              1hr <ChevronDown size={14} />
            </button>
          </div>
          <button className="download-btn">
            <Download size={14} /> Download PDF Health Report up to Now
          </button>
        </div>
      </div>

      <div className="monitors-main-layout">
        <div className="monitors-left">
          <div className="server-grid">
            <ServerCard name="Web Server 2" status="Warning" statusType="warning" color="bg-orange" />
            <ServerCard name="DB Cluster 1" status="Critical" statusType="critical" color="bg-red" />
            <ServerCard name="App Server 3" status="Stable" statusType="stable" color="bg-green" />
            <ServerCard name="App Server 3" status="Stable" statusType="stable" color="bg-green" />
            <ServerCard name="File Server 1" status="Stable" statusType="stable" color="bg-green" />
            <ServerCard name="File Server 1" status="Stable" statusType="stable" color="bg-green" />
          </div>

          <div className="security-logs-panel glass-panel">
             <div className="panel-header">
               <h3>Security & Network Logs</h3>
             </div>
             <div className="logs-list">
                <div className="log-row">
                   <div className="log-item">
                      <span className="dot bg-orange"></span>
                      Web Server 2: High Traffic Alert
                   </div>
                   <div className="log-type">High Traffic Alert</div>
                   <div className="log-time">4 hours ago</div>
                </div>
                <div className="log-row">
                   <div className="log-item">
                      <span className="dot bg-red"></span>
                      DB Cluster 1: Anomaly Detected
                   </div>
                   <div className="log-type">High Traffic Alert</div>
                   <div className="log-time">2 hours ago</div>
                </div>
                <div className="log-row">
                   <div className="log-item">
                      <span className="dot bg-orange"></span>
                      Web Server 2: High Traffic Alert
                   </div>
                   <div className="log-type">High Traffic Alert</div>
                   <div className="log-time">2 hours ago</div>
                </div>
             </div>
          </div>
        </div>

        <aside className="monitors-sidebar glass-panel">
          <div className="panel-header">
            <h3>Monitor Details: Web Server 2</h3>
            <span className="close-pane">✕</span>
          </div>

          <div className="sidebar-section">
            <h4>Detailed real-time gauges</h4>
            <div className="mini-gauges">
               <div className="mini-gauge">
                  <div className="gauge-svg">
                    <svg viewBox="0 0 100 60">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#333" strokeWidth="8" />
                      <path d="M 10 50 A 40 40 0 0 1 70 20" fill="none" stroke="var(--accent-green)" strokeWidth="8" />
                    </svg>
                    <span className="gauge-val">78%</span>
                  </div>
                  <span className="gauge-label">Trending up</span>
               </div>
               <div className="mini-gauge">
                  <div className="gauge-svg">
                    <svg viewBox="0 0 100 60">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#333" strokeWidth="8" />
                      <path d="M 10 50 A 40 40 0 0 1 50 10" fill="none" stroke="var(--accent-orange)" strokeWidth="8" />
                    </svg>
                    <span className="gauge-val">62%</span>
                  </div>
                  <span className="gauge-label">Stable</span>
               </div>
                <div className="mini-gauge">
                  <div className="gauge-svg">
                    <svg viewBox="0 0 100 60">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#333" strokeWidth="8" />
                      <path d="M 10 50 A 40 40 0 0 1 30 25" fill="none" stroke="var(--accent-red)" strokeWidth="8" />
                    </svg>
                    <span className="gauge-val">45%</span>
                  </div>
                  <span className="gauge-label">Stable</span>
               </div>
            </div>
          </div>

          <div className="sidebar-section">
             <h4>Detected Anomalies</h4>
             <ul className="anomaly-check-list">
                <li><span className="dot bg-red"></span> CPU Spike (85%)</li>
                <li><span className="dot bg-red"></span> High Memory Usage (92%)</li>
                <li><span className="dot bg-red"></span> High Memory Usage (92%)</li>
                <li><span className="dot bg-red"></span> Disk Server (85%)</li>
                <li><span className="dot bg-red"></span> Common Usage (66%)</li>
             </ul>
          </div>

          <div className="sidebar-section">
             <div className="section-header">
                <h4>Downtime Tracking</h4>
                <div className="availability-summary">
                   <Activity size={12} className="text-green" />
                   Mini-timeline
                </div>
             </div>
             <div className="timeline-info">Availability <span>Online</span></div>
             <div className="availability-bar">
                <div className="bar-segment green" style={{width: '70%'}}></div>
                <div className="bar-segment orange" style={{width: '5%'}}></div>
                <div className="bar-segment green" style={{width: '20%'}}></div>
                <div className="bar-segment red" style={{width: '5%'}}></div>
             </div>
             <div className="timeline-dates">
                <span>10 Jan</span>
                <span>13 Jan</span>
                <span>02 Feb</span>
                <span>18 Aug</span>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Monitors;
