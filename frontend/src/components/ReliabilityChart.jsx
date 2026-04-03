import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import './ReliabilityChart.css';

const data = [
  { time: '10:00', load: 45, predicted: null },
  { time: '11:00', load: 55, predicted: null },
  { time: '12:00', load: 60, predicted: null },
  { time: '13:00', load: 50, predicted: null },
  { time: '14:00', load: 65, predicted: null },
  { time: '15:00', load: 100, predicted: null },
  { time: '16:00', load: 85, predicted: null },
  { time: '17:00', load: 70, predicted: null },
  { time: '18:00', load: 60, predicted: null },
  { time: '19:00', load: 65, predicted: null },
  { time: '20:00', load: 75, predicted: null },
  { time: '21:00', load: 75, predicted: null },
  { time: 'Now', load: 75, predicted: 75 },
  { time: '23:00', load: null, predicted: 85 },
  { time: '00:00', load: null, predicted: 105 }, // The spike
  { time: '01:00', load: null, predicted: 90 },
  { time: '02:00', load: null, predicted: 65 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const isPrediction = payload[0].dataKey === 'predicted';
    return (
      <div className="custom-tooltip glass-panel">
        <p className="tooltip-label">{label}</p>
        <p className="tooltip-value" style={{ color: payload[0].color }}>
          {isPrediction ? 'Predicted Load: ' : 'Load: '} {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const ReliabilityChart = () => {
  return (
    <div className="reliability-chart-card glass-panel">
      <div className="chart-header">
        <h3>System Reliability & Prediction (Last 24h)</h3>
        <div className="chart-legend">
          <span className="legend-item"><span className="dot bg-green"></span>Normal</span>
          <span className="legend-item"><span className="dot bg-orange"></span>Warning</span>
          <span className="legend-item"><span className="dot bg-red"></span>Critical</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="time" stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 150]} stroke="#64748b" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '3 3' }} />
            <Area 
              type="monotone" 
              dataKey="load" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorLoad)" 
              isAnimationActive={true}
            />
            <Area 
              type="monotone" 
              dataKey="predicted" 
              stroke="#f59e0b" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPredicted)" 
              strokeDasharray="5 5"
              isAnimationActive={true}
            />
            {/* The AI Prediction highlight */}
            <ReferenceDot x="00:00" y={105} r={6} fill="#f59e0b" stroke="none">
               <text x={0} y={-15} fill="#f59e0b" fontSize="12" textAnchor="middle" className="ai-prediction-text">
                 AI Prediction: High Load in 2 hrs
               </text>
            </ReferenceDot>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReliabilityChart;
