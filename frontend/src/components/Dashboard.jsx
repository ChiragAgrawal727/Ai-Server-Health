import React from 'react';
import GaugeCard from './GaugeCard';
import ReliabilityChart from './ReliabilityChart';
import AnomalyList from './AnomalyList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title-row glass-panel">
        <h1 className="main-title">Real-time AI Server Insights.</h1>
        <div className="status-legend">
          <span className="legend-item"><span className="dot bg-green"></span>Normal</span>
          <span className="legend-item"><span className="dot bg-orange"></span>Warning</span>
          <span className="legend-item"><span className="dot bg-red"></span>Critical</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="col-4">
          <GaugeCard
            title="CPU Usage"
            value={78}
            status="Live Data Streaming"
            statusType="streaming"
            color="var(--accent-green)"
            trend="Trend"
          />
        </div>
        <div className="col-4">
          <GaugeCard
            title="RAM Utilization"
            value={62}
            status="Normal"
            statusType="normal"
            color="var(--accent-green)"
          />
        </div>
        <div className="col-4">
          <GaugeCard
            title="Disk I/O"
            value={45}
            status="Live Data Streaming"
            statusType="streaming"
            color="var(--accent-green)"
          />
        </div>

        <div className="col-8">
          <ReliabilityChart />
        </div>
        <div className="col-4">
          <AnomalyList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
