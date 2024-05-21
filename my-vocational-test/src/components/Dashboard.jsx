// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/test">Take the Test</Link>
    </div>
  );
}

export default Dashboard;
