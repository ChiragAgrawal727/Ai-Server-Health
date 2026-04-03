import React from 'react';
import { Radio, ArrowUpRight } from 'lucide-react';
import './GaugeCard.css';

const GaugeCard = ({ title, value, status, statusType, color, trend }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  // 3/4 of a circle is about 280.
  const arcLength = circumference * 0.75;
  const dashoffset = arcLength - (value / 100) * arcLength;

  return (
    <div className="gauge-card glass-panel">
      <div className="gauge-header">
        <h3 className="gauge-title">{title}</h3>
        {statusType === 'streaming' ? (
          <div className="status-streaming" style={{ color: color }}>
            <Radio size={14} className="pulse-icon" />
            <span>Live Data Streaming</span>
          </div>
        ) : (
          <div className="status-normal">
            <span className="dot" style={{ backgroundColor: color }}></span>
            <span>{status}</span>
          </div>
        )}
      </div>
      <div className="gauge-body">
        <div className="gauge-svg-container">
          <svg className="gauge-svg" width="160" height="160" viewBox="0 0 160 160">
            <circle
              className="gauge-bg"
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeDashoffset="0"
              transform="rotate(135 80 80)"
            />
            <circle
              className="gauge-fg"
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeDashoffset={dashoffset}
              transform="rotate(135 80 80)"
              style={{ stroke: color }}
            />
          </svg>
          <div className="gauge-value-container">
            <span className="gauge-value">{value}%</span>
            {trend && (
              <span className="gauge-trend text-secondary">
                {trend} <ArrowUpRight size={14} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeCard;
