import React from 'react';
import { Cpu, Download, Bell, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="header-breadcrumbs">
        <h2 className="breadcrumb-title">Chirag's Servers</h2>
        <span className="breadcrumb-separator">/</span>
        <div className="real-time-dropdown">
          <Cpu size={16} className="text-secondary" />
          <span>Real-time data</span>
          <ChevronDown size={14} className="text-secondary" />
        </div>
      </div>

      <div className="header-actions">
        <button className="btn-download">
          <Download size={16} />
          Download PDF Health Report up to Now [{time}]
        </button>
        <div className="notification-bell">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </div>
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=Chirag&background=random" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
