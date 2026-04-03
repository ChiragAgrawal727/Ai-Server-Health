import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  addEdge, 
  Background, 
  Controls, 
  Handle, 
  Position 
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Play, Square, Settings, Database, Cpu, MessageSquare, FileText, Activity, Download, ChevronDown } from 'lucide-react';
import './Automation.css';

// Custom Node Components
const CustomNode = ({ data, isConnectable }) => {
  return (
    <div className={`custom-node ${data.type}`}>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className="node-content">
        <span className="node-icon">{data.icon}</span>
        <div className="node-info">
          <span className="node-label-top">{data.labelTop}</span>
          <span className="node-label-bottom">{data.labelBottom}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { labelTop: 'Trigger', labelBottom: 'Trigger (CPU > 90%)', icon: <Activity size={14} />, type: 'trigger' },
    position: { x: 50, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: { labelTop: 'Checks', labelBottom: 'Condition (Check Prediction)', icon: <Settings size={14} />, type: 'condition' },
    position: { x: 300, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: { labelTop: 'Action', labelBottom: 'Scale Up RAM 4GB - NeevCloud API)', icon: <Cpu size={14} />, type: 'action' },
    position: { x: 550, y: 50 },
  },
  {
    id: '4',
    type: 'custom',
    data: { labelTop: 'Notification', labelBottom: '(Send Alert)', icon: <MessageSquare size={14} />, type: 'notification' },
    position: { x: 550, y: 150 },
  },
  {
    id: '5',
    type: 'custom',
    data: { labelTop: 'Action', labelBottom: 'Update Zabbix', icon: <Database size={14} />, type: 'action-z' },
    position: { x: 800, y: 50 },
  },
  {
    id: '6',
    type: 'custom',
    data: { labelTop: 'Action', labelBottom: 'Update Report', icon: <FileText size={14} />, type: 'action-r' },
    position: { x: 800, y: 150 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-5', source: '3', target: '5', animated: true },
  { id: 'e4-6', source: '4', target: '6', animated: true },
];

const Automation = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div className="automation-container fade-in">
      <div className="automation-header">
        <div className="header-breadcrumbs">
          <h2>Automation Studio <span className="separator">/</span> <span className="sub-title">Automation Workflows</span></h2>
        </div>
        <div className="header-actions">
          <div className="mode-tabs">
            <span className="mode-label">Edit Modes</span>
            <button className="mode-btn active">Live</button>
            <button className="mode-btn">Design</button>
          </div>
          <button className="download-btn">
            <Download size={14} /> Download Automation Run Report up to Now
          </button>
        </div>
      </div>

      <div className="automation-main-layout">
        {/* Left Sidebar */}
        <aside className="automation-sidebar glass-panel">
          <h3>Available Automation Blocks</h3>
          <div className="block-category">
            <div className="category-header">
              <ChevronDown size={14} /> Data Sources
            </div>
            <div className="category-content">
              <span className="source-tag active">Zabbix</span>
              <div className="tag-group">
                <span className="source-tag">Zabbix</span>
                <span className="source-tag">NeevCloud</span>
              </div>
            </div>
          </div>
          <div className="block-category collapsed">
            <div className="category-header">
              <ChevronDown size={14} className="rotate" /> AI Analysis
            </div>
          </div>
          <div className="block-category collapsed">
            <div className="category-header">
              <ChevronDown size={14} className="rotate" /> Alerting
            </div>
          </div>
           <div className="block-category collapsed">
            <div className="category-header">
              <ChevronDown size={14} className="rotate" /> Report Generation
            </div>
          </div>
           <div className="block-category collapsed">
            <div className="category-header">
              <ChevronDown size={14} className="rotate" /> Infrastructure Actions
            </div>
          </div>
        </aside>

        {/* Workflow Canvas */}
        <div className="workflow-canvas-container glass-panel">
          <div className="canvas-header">
            <h4>Workflow Canvas - New Server Scaling</h4>
          </div>
          <div className="canvas-wrapper">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitView
              style={{ background: 'transparent' }}
            >
              <Background color="#333" gap={20} />
              <Controls />
            </ReactFlow>
          </div>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="automation-bottom-grid">
        <div className="rules-panel glass-panel">
          <div className="panel-header">
            <h3>Active Automation Rules</h3>
            <span>⋮</span>
          </div>
          <ul className="rules-list">
            <li><span className="dot bg-green"></span> DDoS Mitigation</li>
            <li><span className="dot bg-green"></span> Disk Cleanup</li>
            <li><span className="dot bg-yellow"></span> Weekly Report Generation</li>
            <li><span className="dot bg-green"></span> Report Generation</li>
          </ul>
        </div>

        <div className="history-panel glass-panel">
          <div className="panel-header">
            <h3>Workflow Execution History</h3>
            <span>⋮</span>
          </div>
          <div className="history-list">
            <div className="history-item">DDoS rule ran at 14:32 - <span className="text-green">Success</span></div>
            <div className="history-item">DDoS rule ran at 14:32 - <span className="text-green">Success</span></div>
            <div className="history-item">DDoS rule ran at 14:32 - <span className="text-green">Success</span></div>
            <div className="history-item">DDoS rule ran at 14:32 - <span className="text-green">Success</span></div>
          </div>
        </div>

        <div className="logs-panel glass-panel">
          <div className="panel-header">
            <h3>System AI Logs</h3>
            <span>⋮</span>
          </div>
          <div className="terminal-logs">
            <div className="log-line">[2022-03-14:32:03] Read has susscessed toegated vinigashed</div>
            <div className="log-line">[2022-03-14:32:13] Read the neevcloud execution- Successd</div>
            <div className="log-line">[2022-03-14:32:26] Comspote sorting execution webocenoted</div>
            <div className="log-line">[2022-03-14:32:17] AI system updates AI logs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
