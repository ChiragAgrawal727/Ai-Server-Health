import React from 'react';
import { MoreVertical } from 'lucide-react';
import './AnomalyList.css';

const anomalies = [
  { id: 1, text: 'CPU Spike (85%) - Web Server 2', status: 'resolved', color: 'var(--accent-green)' },
  { id: 2, text: 'High Memory Usage (92%) - DB Cluster 1', status: 'critical', color: 'var(--accent-red)' },
];

const AnomalyList = () => {
  return (
    <div className="anomaly-list-card glass-panel">
      <div className="anomaly-header">
        <h3>Recent Anomalies</h3>
        <button className="icon-btn">
          <MoreVertical size={16} />
        </button>
      </div>
      <div className="anomaly-content">
        <ul className="anomaly-ul">
          {anomalies.map((anomaly) => (
            <li key={anomaly.id} className="anomaly-item">
              <span className="dot" style={{ backgroundColor: anomaly.color, boxShadow: `0 0 8px ${anomaly.color}40` }}></span>
              <span className="anomaly-text">{anomaly.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnomalyList;
