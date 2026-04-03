import React, { useState } from 'react';
import { 
  BarChart3, 
  Search, 
  Calendar, 
  ChevronRight, 
  Download, 
  Eye, 
  AlertCircle, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  TrendingUp,
  ChevronDown
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './Reports.css';

const mockReportData = [
  { name: '6:00 AM', score: 25 },
  { name: '8:00 AM', score: 35 },
  { name: '9:00 AM', score: 62 },
  { name: '12:00 PM', score: 55 },
  { name: '18:30 AM', score: 58 },
  { name: '2:00 PM', score: 90 },
];

const Reports = () => {
  const [selectedRange, setSelectedRange] = useState('24h');

  const reports = [
    { id: 1, name: 'AI Health Report - Chirag\'s Servers', date: 'April 24, 2024', score: 72, max: 100, status: 'Warning' },
    { id: 2, name: 'AI Health Report - Chirag\'s Servers', date: 'April 23, 2024', score: 68, max: 100, status: 'Critical' },
    { id: 3, name: 'Transform Data Health Report', date: 'April 22, 2024', score: 94, max: 100, status: 'Normal' },
    { id: 4, name: 'All Nodes Health Summary', date: 'April 21, 2024', score: 99, max: 100, status: 'Normal' },
  ];

  return (
    <div className="reports-container fade-in">
      <div className="reports-main-content">
        {/* Header section with summary cards */}
        <div className="reports-top-section glass-panel">
          <div className="reports-header-row">
            <h2>AI Health Reports</h2>
            <div className="filter-dropdown">
              <Clock size={16} /> Last 24 hours <ChevronRight size={14} className="rotate-90" />
            </div>
          </div>

          <div className="summary-cards-row">
            <div className="summary-card">
              <div className="mini-gauge-container">
                <svg viewBox="0 0 100 100" className="mini-gauge-svg">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#222" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="none" stroke="var(--accent-green)" 
                    strokeWidth="8" 
                    strokeDasharray="251.2" 
                    strokeDashoffset={251.2 * (1 - 0.72)}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="600">72</text>
                </svg>
                <div className="card-info">
                  <span className="card-title">System Health Score</span>
                  <span className="card-subtitle">72/100 - <span className="text-orange">Warning</span></span>
                </div>
              </div>
            </div>

            <div className="summary-card text-center">
              <div className="card-val-row">
                <span className="card-value">8</span>
                <span className="card-label">Total</span>
              </div>
              <span className="card-detail"><span className="dot bg-orange"></span> Warning</span>
            </div>

            <div className="summary-card text-center">
              <div className="card-val-row">
                <span className="card-value text-red">3</span>
                <span className="card-label">Critical Alerts</span>
              </div>
              <span className="card-detail">Last 24 hours</span>
            </div>

            <div className="summary-card text-center">
               <div className="card-val-row">
                <span className="card-value text-green">99.5%</span>
              </div>
              <span className="card-detail">Last 24 hours</span>
            </div>
          </div>
        </div>

        {/* Filters and Table Section */}
        <div className="reports-list-section glass-panel">
          <div className="toolbar">
            <div className="range-tabs">
              <button className={selectedRange === '24h' ? 'active' : ''} onClick={() => setSelectedRange('24h')}>Last 24 hours</button>
              <button>Last 7 days</button>
              <button>Custom</button>
              <button className="search-btn"><Search size={14} /> Search</button>
            </div>
            <div className="search-input-wrapper">
              <input type="text" placeholder="Search reports..." className="search-input" />
              <Search className="search-icon" size={16} />
            </div>
          </div>

          <table className="reports-table">
            <thead>
              <tr>
                <th>Report Name <ChevronDown size={12} /></th>
                <th>Date <ChevronDown size={12} /></th>
                <th>Health Score <ChevronDown size={12} /></th>
                <th>Status <ChevronDown size={12} /></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>
                    <div className="report-name-cell">
                      <span className="report-icon"><CheckCircle2 size={16} /></span>
                      {report.name}
                    </div>
                  </td>
                  <td>{report.date}</td>
                  <td><span className="score-badge">{report.score} / 100</span></td>
                  <td>
                    <span className={`status-badge ${report.status.toLowerCase()}`}>
                      {report.status}
                    </span>
                  </td>
                  <td>
                    <button className="view-btn">
                      <Eye size={14} /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trend Chart Section */}
        <div className="reports-chart-section glass-panel">
          <div className="chart-header">
            <h3>Report Reports</h3>
            <span className="chart-time">Last 24 hours <ChevronRight size={12} className="rotate-90" /></span>
            <div className="chart-pagination">
               <span className="page-arrow">{'<'}</span>
               <span className="page-arrow">{'>'}</span>
            </div>
          </div>
          <div className="reports-trend-chart">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={mockReportData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-green)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-green)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 10}} dy={10} />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--accent-green)' }}
                />
                <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="var(--accent-green)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                    dot={{ r: 4, fill: 'var(--accent-green)', strokeWidth: 2, stroke: '#111' }}
                    activeDot={{ r: 6, fill: '#fff' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Sidebar Details */}
      <aside className="reports-sidebar glass-panel">
        <div className="sidebar-header">
          <div className="sidebar-status">
            <CheckCircle2 size={16} className="text-green" />
            AI Health Report
          </div>
        </div>

        <div className="sidebar-report-info">
          <h3>Chirag</h3>
          <p className="report-timestamp">Generated on Thursday, 24 April 2024</p>
        </div>

        <div className="sidebar-card report-score-card">
          <h4>AI Health Report</h4>
          <span className="report-target">Chirag's Servers</span>
          
          <div className="sidebar-gauge-section">
            <div className="large-gauge">
               <svg viewBox="0 0 120 120" className="main-gauge-svg">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#222" strokeWidth="10" />
                  <circle 
                    cx="60" cy="60" r="50" 
                    fill="none" stroke="var(--accent-blue)" 
                    strokeWidth="10" 
                    strokeDasharray="314" 
                    strokeDashoffset={314 * (1 - 0.72)}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                  <text x="60" y="65" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700">72</text>
                </svg>
                <div className="gauge-status-info">
                  <h5>System Health Score</h5>
                  <p>72 / 100 - <span className="text-orange">Warning</span> <ChevronRight size={12} /></p>
                </div>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
           <h4>CPU Usage</h4>
           <div className="cpu-usage-viz">
              <div className="circle-progress">
                 <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#222" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-green)" strokeWidth="8" strokeDasharray="251" strokeDashoffset={251 * 0.28} transform="rotate(-90 50 50)" />
                 </svg>
                 <div className="progress-center">
                    <span className="percent">72%</span>
                    <span className="label">Last 24 hours</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="sidebar-section">
           <h4>AI Summary</h4>
           <ul className="summary-list">
              <li><span className="dot bg-orange"></span> 3 Total Incidents</li>
              <li><span className="dot bg-red"></span> 3 Critical Alerts</li>
           </ul>
        </div>

        <div className="sidebar-section">
           <h4>Predictive Insight</h4>
           <div className="insight-card">
              <div className="insight-item green-glow">
                 <span className="bullet"></span> High load predicted within 2 hours
              </div>
              <div className="insight-item blue-glow">
                 <span className="bullet"></span> Replace Disk 2 soon
              </div>
           </div>
        </div>

        <div className="sidebar-footer">
          <button className="primary-btn download-report-btn">
            <Download size={16} /> Download Report
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Reports;
